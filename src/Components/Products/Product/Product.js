import React from "react"
import {NavLink} from "react-router-dom";



export const Product = ({name,line, price,id,images,onAddItemToCartHandler,colors})=>{


    const onAddItemToCart = (id)=>{
        onAddItemToCartHandler(id)
    }
    return(
        <div className="product">
            <div className="product__title">
                <div>
                    <h6 onClick={()=>onAddItemToCart(id)} >{name}</h6>
                    <span>{line}</span>
                </div>
                <div className="product__title-price">
                    <span>{price}$</span>
                </div>
            </div>
            <div className="product__img">
                <NavLink to={"/item/" + id}><img src={images[0]} alt="nike air max"/></NavLink>
            </div>
            <div className="product__settings">
                <div className="product__colors">
                    {colors.map(u=>
                        <div key={`${u.id}_${u}`} className={ `product__color product-${u}`} />
                    )}
                </div>
                <div className="product__id">
                    <span>{id}</span>
                </div>
            </div>
        </div>
    )
}