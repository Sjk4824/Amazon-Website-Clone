import React from 'react'
import "./Subtotal.css"; 
import CurrencyFormat from "react-currency-format"; 
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory(); 
    const [{basket}, dispatch] = useStateValue();
    //we need to iterate over items and sum up the total price. 
    let totalPrice = 0; 
    for(var i=0; i<basket.length; i++){
        totalPrice += basket[i].price; 
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText = {(value) => (
                <>
                    <p>Subtotal ({basket.length} items) : <strong>${totalPrice}</strong></p>
                    <small className = "subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}
            decimalScale = {2}
            value={getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix={"$"}
            />
            <button onClick={e => history.push("/payment")}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
