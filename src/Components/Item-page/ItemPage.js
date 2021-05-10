import React from 'react'
import downArrow  from "../../assets/img/down-arrow.png"
import {NavLink} from "react-router-dom";
const style ={
    marginBottom:"20px"
}
export const ItemPage = ({name,price,about,images,id,sizes,colors,onAddItemToCartHandler})=>{
    const [selectedSize, setSelectedSize] = React.useState(sizes[0])
    const [selectedColor, setSelectedColor] = React.useState(colors[0])
    const setSelectedSizeOnClick = (size)=>{
        setSelectedSize(size);
    }
    const setSelectedColorOnClick = (color)=>{
        setSelectedColor(color);
    }
    const onAddItemToCart = (id,selectedSize,selectedColor)=>{
        onAddItemToCartHandler(id,selectedSize,selectedColor)
    }
    return(
        <div className="product-container">
            <div className="product-images">
                <img src={images[0]} alt="nike air max 90"/>
                <img src={images[1]} alt="nike air max 90"/>
                <img src={images[2]} alt="nike air max 90"/>
                <img src={images[3]} alt="nike air max 90"/>
            </div>
            <div className="product-navigation">
                <h2>{name}</h2>
                <div className="product-navigation__text-line">
                    <span>МУЖСКАЯ ОБУВЬ ДЛЯ ТРЕНИНГА</span>
                    <span className="product-navigation__price">{price} $</span>
                </div>
                <div className="product-navigation__colors">
                    <span>Цвет: </span>
                    <div className="product__colors">
                        {colors.map(u=>
                            <div key={`${u.id}_${u}`} onClick={()=>setSelectedColorOnClick(u)} className={u === selectedColor ? `product__color product-${u} selected`: `product__color product-${u}`} />
                        )}

                    </div>

                </div>
                <div className="product-navigation__size">
                    <div className="product-navigation__size-change">
                        <span>Размер <img src={downArrow} alt="arrow"/></span> <span>42</span>
                    </div>
                    <div className="product-navigation__size-boxes">
                        {sizes.map(u=>
                            <div key={`${u.id}_${u}`} onClick={()=>setSelectedSizeOnClick(u)}  className= {u === selectedSize ? 'product-navigation__size-box box-active':'product-navigation__size-box'}>
                                <span>{u}</span>
                            </div>
                        )}

                    </div>
                </div>
                <div className="product-navigation__about">
                    <p>
                        {about}
                    </p>
                    <span className="product-navigation__about-ID">{id}</span>
                </div>
                <div className="product-navigation__buttons">
                    <NavLink to="/"><div className="product-navigation__button button-back" style={style}>
                        <span>вернуться назад</span>
                    </div></NavLink>
                    <div onClick={()=>onAddItemToCart(id,selectedSize,selectedColor)} className="product-navigation__button button-add">
                        <span>Добавить в корзину</span>
                    </div>
                </div>
            </div>
        </div>
    )
}