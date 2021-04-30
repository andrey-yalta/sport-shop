import React from "react"
import product_1 from "../../../assets/img/product-1.png"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addShoesToCart} from "../../../redux/cart-reducer";

export const Product = ({name,line, price,id,images})=>{
    const dispatch = useDispatch();

    const onAddItemToCart = (name,price)=>{
        const addedItem = {
            name:name,
            price:price
        }

        dispatch(addShoesToCart(addedItem));
    }
    return(
        <div className="product">
            <div className="product__title">
                <div>
                    <h6 onClick={()=>onAddItemToCart(name,price)} >{name}</h6>
                    <span>{line}</span>
                </div>
                <div className="product__title-price">
                    <span>{price}$</span>
                </div>
            </div>
            <div className="product__img">
                <NavLink to="/item"><img src={images[0]} alt="nike air max"/></NavLink>
            </div>
            <div className="product__settings">
                <div className="product__colors">
                    <div className="product__color product-blue"> </div>
                    <div className="product__color product-black"> </div>
                    <div className="product__color product-red"> </div>
                    <div className="product__color product-white"> </div>
                </div>
                <div className="product__id">
                    <span>{id}</span>
                </div>
            </div>
        </div>
    )
}