import React from 'react'
import cart_item_1 from "../../../assets/img/cart-item-1.png";
export const CartItem = ()=>{
    const style ={
        display:'inline-block'
    }
    return(
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={ cart_item_1} alt=""/>
            </div>

            <div className="cart-item__info">
                <div className="cart-item__about">
                    <h6>Air max 90</h6>
                    <span>NIKE SPORTWEAR</span>
                    <span>   <div className="product__color product-blue" style={style}
                                       />

            </span>
                </div>
                <div className="cart-item__nav">
                    <h6>120$</h6>
                    <span>Удалить</span>
                </div>
            </div>

        </div>
    )
}