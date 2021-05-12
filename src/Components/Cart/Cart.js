import React from 'react'
import {CartItemContainer} from "./Cart-item/CartItemContainer";
import {CartInputs} from "./Cart-inputs/CartInputs";

export const Cart = ({cartItems,totalPrice}) =>{

    return(
        <div className="cart-main">
            <div className="cart cart-page">
                <div className="cart__items">
                    {cartItems.map(u=> <CartItemContainer{...u} key={`${cartItems.indexOf(u)}_${u.price}`}/>)}

                </div>
                <div className="cart__total-sum">
                    <span>Общая стоимость</span>
                    <h6>{totalPrice} $</h6>
                </div>
            </div>
            <CartInputs/>
        </div>
    )
}