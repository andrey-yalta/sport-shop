const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const ADD_SHOES_TO_CART = "ADD_SHOES_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const MINUS_CART_ITEM = "MINUS_CART_ITEM";
const PLUS_CART_ITEM = "PLUS_CART_ITEM";


let initialState = {
    cartItems: [],
    totalPrice:0,
    totalCount:0,
    isFetching:false,

};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case ADD_SHOES_TO_CART:
            debugger;
            return {

                ...state, cartItems: [...state.cartItems, action.shoes], totalPrice:state.totalPrice += +action.shoes.price, totalCount: state.totalCount +=1,
            }
        case REMOVE_ITEM:
            let newCartItems =  [...state.cartItems]
            const idx = newCartItems.findIndex(u=> u.id === action.id)
            const newPrice = state.totalPrice - newCartItems[idx].price
            delete newCartItems[idx]
            newCartItems = newCartItems.filter(u=> true)
            return {
                ...state, cartItems:newCartItems,totalPrice:newPrice , totalCount: state.totalCount -=1
            }
        case CLEAR_CART:
            return {
                ...state, cartItems: [], totalPrice: 0, totalCount: 0
            }
        default:
            return state;
    }
}
export default cartReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const addShoesToCart = (shoes) =>{

    return {type:ADD_SHOES_TO_CART,shoes}
};
export const clearCart = () =>{

    return {type:CLEAR_CART}
};
export const removeItem = (id) =>{
    return {type:REMOVE_ITEM,id}
};
export const plusCartItem = (id) =>{

    return {type:PLUS_CART_ITEM,id}
};
export const minusCartItem = (id) =>{

    return {type:MINUS_CART_ITEM,id}
};