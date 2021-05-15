import React from 'react'
import header_mobile_cart from "../../assets/img/header-mobile-cart.png"
import header_mobile_loupe from "../../assets/img/header-mobile-loupe.png"
import header_mobile_menu from "../../assets/img/header-mobile-menu.png"
import main_logo from "../../assets/img/main-logo.png"
import {NavLink} from "react-router-dom";


export const Header = ({isHeaderScroll,category,setSelectedCategoryOnClick,selectedCategory,
                        searchRef,handleClickToSearch,isSearchOpen,setSearchOnClick,onSearchInput,
                        searchValue,totalCount,searchRefMobile,handleClickToSearchMobile,isSearchOpenMobile,
                        onNavMenuCLick,sortRef,isNavMenuOpen})=>{

    return(
        <header className={isHeaderScroll? "header header__top-scroll":"header "}>
            <div className="header__logo">
                <NavLink to={"/"} >
                    <img src={main_logo} alt="street funky"/>
                </NavLink>
            </div>
            <nav className="header__nav">
                <ul>
                    { category.map(u=> <li key={`$_${u}`} onClick={()=>{setSelectedCategoryOnClick(u)}} className={u === selectedCategory ? 'active':''}>   {u}</li>)}
                </ul>
                <ul>
                    <li ref={searchRef}>
                        <button onClick={handleClickToSearch} className={isSearchOpen? "none":""} >Поиск</button>
                        <form onSubmit={ setSearchOnClick} className={isSearchOpen? "header__nav-search":"header__nav-search none"}>
                            <input  onChange={onSearchInput} value={searchValue} placeholder={'search...'} type="text" />
                            <button >Поиск</button>
                        </form>

                    </li>
                    <li><NavLink to="/cart">Корзина ({totalCount})</NavLink></li>
                </ul>
            </nav>
            <div className="header__nav-mobile">
                <NavLink to={"/cart"} ><img src={header_mobile_cart} alt="cart"/></NavLink>
                <span ref={searchRefMobile} >
                    <img onClick={handleClickToSearchMobile} className={isSearchOpenMobile? "none":""}  src={header_mobile_loupe} alt="search"/>
                    <form onSubmit={ setSearchOnClick} className={isSearchOpenMobile? "header__nav-search":"header__nav-search none"}>
                        <input  onChange={onSearchInput} value={searchValue} placeholder={'search...'} type="text" />
                        <button >Поиск</button>
                    </form>
                </span>
                <div ><img onClick={onNavMenuCLick}  ref={sortRef} src={header_mobile_menu} alt="menu"/></div>
                <div  className={ isNavMenuOpen ? "header__nav-mobile-menu":"header__nav-mobile-menu none"}>
                    <ul>
                        {category.map(u=> <li key={`$_${u}`} onClick={()=>{setSelectedCategoryOnClick(u)}} className={u === selectedCategory ? 'active':''}>   {u}</li>)}
                    </ul>
                </div>
            </div>
        </header>
    )
}
