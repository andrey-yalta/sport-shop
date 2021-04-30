const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const ADD_SHOES_TO_CART = "ADD_SHOES_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const MINUS_CART_ITEM = "MINUS_CART_ITEM";
const PLUS_CART_ITEM = "PLUS_CART_ITEM";


let initialState = {
    items: [],
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
            const newItems = state.items
            newItems.push(action.shoes)
            console.log(newItems)
            return {
                ...state, items: newItems

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