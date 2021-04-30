import React from 'react'
import product_image_1  from "../../assets/img/product-image-1.png"
import product_image_2  from "../../assets/img/product-image-2.png"
import product_image_3  from "../../assets/img/product-image-3.png"
import product_image_4  from "../../assets/img/product-image-4.png"
import downArrow  from "../../assets/img/down-arrow.png"
const style ={
    marginBottom:"20px"
}
export const ItemPage = ()=>{
    return(
        <div className="product-container">
            <div className="product-images">
                <img src={product_image_1} alt="nike air max 90"/>
                    <img src={product_image_2} alt="nike air max 90"/>
                        <img src={product_image_3} alt="nike air max 90"/>
                            <img src={product_image_4} alt="nike air max 90"/>
            </div>
            <div className="product-navigation">
                <h2>NIKE AIR MAX 90</h2>
                <div className="product-navigation__text-line">
                    <span>МУЖСКАЯ ОБУВЬ ДЛЯ ТРЕНИНГА</span>
                    <span className="product-navigation__price">1200 руб</span>
                </div>
                <div className="product-navigation__colors">
                    <span>Цвет: </span>
                    <div className="product__colors">
                        <div className="product__color product-blue"/>
                        <div className="product__color product-black"/>
                        <div className="product__color product-red"/>
                        <div className="product__color product-white"/>
                    </div>

                </div>
                <div className="product-navigation__size">
                    <div className="product-navigation__size-change">
                        <span>Размер <img src={downArrow} alt="arrow"/></span> <span>42</span>
                    </div>
                    <div className="product-navigation__size-boxes">
                        <div className="product-navigation__size-box">
                            <span>39</span>
                        </div>
                        <div className="product-navigation__size-box">
                            <span>40</span>
                        </div>
                        <div className="product-navigation__size-box box-active">
                            <span>41</span>
                        </div>
                        <div className="product-navigation__size-box">
                            <span>42</span>
                        </div>
                        <div className="product-navigation__size-box">
                            <span>43</span>
                        </div>
                        <div className="product-navigation__size-box">
                            <span>44</span>
                        </div>
                        <div className="product-navigation__size-box">
                            <span>45</span>
                        </div>
                        <div className="product-navigation__size-box">
                            <span>46</span>
                        </div>
                    </div>
                </div>
                <div className="product-navigation__about">
                    <p>
                        Кроссовки Nike React Metcon сочетают стабилизацию и сцепление оригинальной модели для тренинга с
                        самой комфортной амортизацией Nike. Легкий дышащий верх и подошва для надежного сцепления
                        обеспечивают комфорт во время интенсивных тренировок и упражнений с отягощением.
                    </p>
                    <span className="product-navigation__about-ID">CDS 12930244-E</span>
                </div>
                <div className="product-navigation__buttons">
                    <div className="product-navigation__button button-back" style={style}>
                        <span>вернуться назад</span>
                    </div>
                    <div className="product-navigation__button button-add">
                        <span>Добавить в корзину</span>
                    </div>
                </div>
            </div>
        </div>
    )
}