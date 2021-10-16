import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios"; 

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false); 
  const [processing, setProcessing] = useState(""); 
  const [clientSecret, setClientSecret] = useState(true); 

  useEffect(()=>{
    //generate the stripe secret, allowing charges 
    const getClientSecret = async () =>{
        const response = await axios({
            method: 'post', 
            //srtipe expects the total in a currencies subunits. 
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret); 
    }

    getClientSecret(); 
  }, [basket])  
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setProcessing(true); 
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method : {
            card : elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) => {
        setSucceeded(true);
        setError(null); 
        setProcessing(false); 
        history.replaceState("/orders");
    })
  }

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment section --> delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>National Institute of Technology Karnataka</p>
            <p>Mangalore, Srinivasnagar, PO 509625</p>
          </div>
        </div>
        {/* Payment section --> Item review */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* All the products will be displayed here */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section --> Card details */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                       <h3> Order Total: {value}</h3>
                  )}

                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
