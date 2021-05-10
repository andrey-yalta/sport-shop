import React from 'react'
import {NavLink} from "react-router-dom";

export const CartItem = ({name,line, price,id,images,removeItemHandler,sizes,colors,selectedSize,selectedColor})=>{
    const style ={
        display:'inline-block'
    }

    const onClickToRemoveItem = (id)=>{
        removeItemHandler(id)
    }
    return(
        <div className="cart-item">
            <div className="cart-item__img">
                <NavLink to={`/item/${id}`}><img src={ images[0]} alt=""/></NavLink>
            </div>

            <div className="cart-item__info">
                <div className="cart-item__about">
                    <h6>{name}</h6>
                    <span>{line}</span>
                    <span>Размер: {selectedSize}</span>
                    <span><div className={`product__color product-${selectedColor}`} style={style}/></span>
                </div>
                <div className="cart-item__nav">
                    <h6>{price} $</h6>

                    <span onClick={()=>{onClickToRemoveItem(id)}}>Удалить</span>
                </div>
            </div>

        </div>
    )
}