import {Cart} from "./Cart";
import {useSelector} from "react-redux";
import React from "react";

const CartContainer = ()=>{
    const cartItems = useSelector(state => state.cartPage.cartItems);
    const totalPrice = useSelector(state => state.cartPage.totalPrice);

    return(
        <Cart cartItems={cartItems} totalPrice={totalPrice} />
    )
}
export default CartContainer