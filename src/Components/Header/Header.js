import React from 'react'
import header_mobile_cart from "../../assets/img/header-mobile-cart.png"
import header_mobile_loupe from "../../assets/img/header-mobile-loupe.png"
import header_mobile_menu from "../../assets/img/header-mobile-menu.png"
import main_logo from "../../assets/img/main-logo.png"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedSex} from "../../redux/shoes-reducer";
export const Header =({isHeaderScroll = false})=>{

    const dispatch = useDispatch();
    const category = useSelector(state => state.shopPage.category);
    const [selectedCategory, setSelectedCategory] = React.useState(category[0])
    const [isNavMenuOpen, setisNavMenuOpen] = React.useState(false)
    const totalCount = useSelector(state => state.cartPage.totalCount);

    const setSelectedCategoryOnClick = React.useCallback((sex) => {
        setSelectedCategory(sex);
        dispatch(setSelectedSex(sex));
    }, [dispatch]);

    const onNavMenuCLick =()=>{
        setisNavMenuOpen(!isNavMenuOpen)
    }

    const sortRef = React.useRef()


    const handleOutsideClick =(e)=>{
// не работает на сфари ?
        if(e.path){// проверка на e path для сафари
            if(!e.path.includes(sortRef.current)){
                setisNavMenuOpen(false);
            }
        }

    }
    React.useEffect(()=>{
        document.body.addEventListener("click",handleOutsideClick)
    },[])
    return(
        <header className={isHeaderScroll? "header header__top-scroll":"header "}>
            <div className="header__logo">
                <NavLink to={"/"} >
                    <img src={main_logo} alt="street funky"/>
                </NavLink>
            </div>
            <nav className="header__nav">
                <ul>
                    {category.map(u=> <li key={`$_${u}`} onClick={()=>{setSelectedCategoryOnClick(u)}} className={u === selectedCategory ? 'active':''}>   {u}</li>)}
                </ul>
                <ul>
                    <li><a href="/">Поиск</a></li>
                    <li><NavLink to="/cart">Корзина ({totalCount})</NavLink></li>
                </ul>
            </nav>
            <div className="header__nav-mobile">
                <NavLink to={"/cart"} ><img src={header_mobile_cart} alt="cart"/></NavLink>
                <NavLink to={"/"} ><img src={header_mobile_loupe} alt="search"/></NavLink>
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