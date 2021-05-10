import React from "react"
import {CartItem} from "./Cart-item";
import {useDispatch} from "react-redux";
import {removeItem} from "../../../redux/cart-reducer";
export  const CartItemContainer =(props)=>{

    const dispatch = useDispatch();
    const removeItemHandler = (id)=>{
        dispatch(removeItem(id))
    }
    return(
        <CartItem {...props} removeItemHandler={removeItemHandler}/>
    )
}