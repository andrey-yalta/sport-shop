import React from 'react'
import footer_logo from '../../assets/img/footer-logo.png'
import {NavLink} from "react-router-dom";

export const Footer =({category,selectedCategory,setSelectedCategoryOnClick})=>{

    return(
        <footer className="footer">
            <div className="footer__logo">
                <NavLink exact to={"/"}><img src={footer_logo} alt="street funky"/></NavLink>
            </div>
            <div className="footer__nav">
                <ul>
                    <li className="active">Магазин</li>
                    {category.map(u=> <li key={`$_${u}`} onClick={()=>{setSelectedCategoryOnClick(u)}} className={u === selectedCategory ? 'active':''}>   {u}</li>)}
                </ul>


                <ul>
                    <li><NavLink exact to={"/"}>Главная</NavLink></li>
                    <li><NavLink to={"/reviews "}>Отзывы</NavLink></li>
                    <li><NavLink to={"/about "}>О нас</NavLink></li>
                    <li><NavLink to={"/contacts"} >Контакты</NavLink></li>
                </ul>

                <ul>
                    <li  className="active">Подпишись</li>
                    <li><a href={"https://vk.com"}>Vk</a></li>
                    <li><a href={"https://instagram.com"}>Instagram</a></li>
                    <li><a href={"https://facebook.com"}>FAcebook</a></li>
                </ul>
            </div>
        </footer>
    )
}