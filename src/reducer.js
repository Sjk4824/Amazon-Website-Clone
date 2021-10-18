export const initialState = {
    basket : [],
    user : null
}; 

export const getBasketTotal = (basket) =>
    //reuce iterates over the basket
    basket?.reduce((amount, item)=>item.price + amount, 0); 

const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET' : 
            return {
                ...state, 
                basket : [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET" : 
            //the below code finds the "first" match and returns the index of that match. 
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id); 
            let newBasket = [...state.basket]; 
            if(index >= 0){
                //actually found a valid item
                newBasket.splice(index, 1); 
            }
            else{
                console.warn(`cant remove the product id : ${action.id} as its not present in basket!`); 
            }
            return {
                ...state, 
                basket : newBasket
            }
        case "SET_USER" : 
            return {
                ...state, 
                user: action.user
            }
        case 'EMPTY_BASKET' : 
            return {
                ...state, 
                basket : []
            }
        default : 
            return state; 
    }
}

export default reducer; 