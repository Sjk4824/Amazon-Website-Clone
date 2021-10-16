import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"; 
import { useStateValue } from './StateProvider';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue(); 

    return (
        <div className = "payment">
            <div className = "payment__container">
                <h1>
                    Checkout (<Link to ="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* Payment section --> delivery address */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className = "payment__address">
                        <p>{user?.email}</p>
                        <p>National Institute of Technology Karnataka</p>
                        <p>Mangalore, Srinivasnagar, PO 509625</p>
                    </div>
                </div>
                {/* Payment section --> Item review */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {/* All the products will be displayed here */}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                image = {item.image}
                                title = {item.title}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section --> Card details */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className = "payment__details">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
