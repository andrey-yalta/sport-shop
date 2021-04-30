import React from 'react'
import header_mobile_cart from "../../assets/img/header-mobile-cart.png"
import header_mobile_loupe from "../../assets/img/header-mobile-loupe.png"
import header_mobile_menu from "../../assets/img/header-mobile-menu.png"
import main_logo from "../../assets/img/main-logo.png"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
export const Header =()=>{
    const category = useSelector(state => state.shopPage.category);
    const [selectedCategory, setSelectedCategory] = React.useState(category[0])
    const setSelectedCategoryOnClick = (item)=>{
        console.log(item)
        setSelectedCategory(item);
    }
    return(
        <header className="header">
            <div className="header__logo">
                <NavLink to={"/"} >
                    <img src={main_logo} alt="street funky"/>
                </NavLink>
            </div>
            <nav className="header__nav">
                <ul>
                    {category.map(u=> <li key={`$_${u}`} onClick={()=>{setSelectedCategoryOnClick(u)}}><NavLink  className={u === selectedCategory ? 'active':''} to={`/${u}`}>{u}</NavLink></li>)}
                </ul>
                <ul>
                    <li><a href="/">Поиск</a></li>
                    <li><NavLink to="/cart">Корзина (2)</NavLink></li>
                </ul>
            </nav>
            <div className="header__nav-mobile">
                <a href="/"><img src={header_mobile_cart} alt="cart"/></a>
                <a href="/"><img src={header_mobile_loupe} alt="search"/></a>
                <a href="/"><img src={header_mobile_menu} alt="menu"/></a>
            </div>
        </header>
    )
}