import React from 'react'
import "./CheckoutProduct.css"; 
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, price, rating, title, hideButton}) {
    const[{basket}, dispatch] = useStateValue(); 
    const removeFromBasket = ()=>{
        //we need to remove an element from the basket
        dispatch({
            type:"REMOVE_FROM_BASKET", 
            id : id, 
        })
    }
    return (
        <div className = "checkoutProduct">
            <img className="checkoutProduct__image" src = {image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>
                <div className = "checkoutProduct__rating">
                    { Array.apply(null, {length: rating}).map((_,i)=>(<p key={i}>🍃</p>)) }
                </div>
                {!hideButton && (
                    <button className="checkoutProduct__button" onClick = {removeFromBasket}>Remove from Basket</button>
                )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
