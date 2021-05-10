import React from 'react'
import down_arrow from '../../assets/img/down-arrow.png'
import nav_settings from '../../assets/img/nav-settings.png'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedBrand, setSelectedColor, setSelectedPriceSortBy, setSelectedSize} from "../../redux/shoes-reducer";

import {Header} from "../Header/Header";


export const Navigation = ()=>{
    const navigationMenu = [
        "company",
        "colors",
        "sizes",
        "price"
    ]
    const dispatch = useDispatch();
    const brands = useSelector(state => state.shopPage.brandsCategories);
    const sizes= useSelector(state => state.shopPage.sizes);
    const colors = useSelector(state => state.shopPage.colors);
    const priceSort = useSelector(state => state.shopPage.priceSort);
    const categories = {"company":brands,"sizes":sizes,"colors":colors,"price":priceSort}
    const [selectedCategoryItem, setSelectedCategoryItem] = React.useState("NIKE")
    const [selectedCategory, setSelectedCategory] = React.useState(navigationMenu[0])
    const [isNavMenuOpen, setisNavMenuOpen] = React.useState(false)
    const setSelectedCategoryOnClick = (item)=>{
        setSelectedCategory(item);
    }
    const onNavMenuCLick =()=>{
        setisNavMenuOpen(!isNavMenuOpen)
    }
    const setSelectedColorOnClick = (item,selectedCategory)=>{
        setSelectedCategoryItem(item)
        switch (selectedCategory) {
            case "colors":
            {

                dispatch(setSelectedColor(item))
                break
            }
            case "sizes":
            {

                dispatch(setSelectedSize(item))
                break
            }
            case "company":
            {

                dispatch(setSelectedBrand(item))
                break
            }
            case "price":
            {

                dispatch(setSelectedPriceSortBy(item))
                break
            }
            default:
                return true;
        }

    }
    /// scroll
    const [scroll, setScroll] = React.useState(0);
    const [scrollPrev, setScrollPrev] = React.useState(0);

    const handleScroll = () => {
        // console.log(window.scrollY)
        setScroll(scrollPrev=>{
            setScrollPrev(scrollPrev)
            return window.scrollY})

    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () =>window.removeEventListener("scroll", handleScroll);

    }, []);
    ///scroll



    return(
        <div   className={(scroll < 160) ? "navigation__container" : " navigation__container sticky"}>
           <div className={ ((scroll > 160) && (scrollPrev > scroll))? "":"none"}>
               <Header isHeaderScroll={true} />
           </div>

            <div className={"navigation"}>
                <div className="navigation__header">
                    <h1>Мужская обувь</h1>
                </div>
                <div className="navigation__settings">
                    <div className="navigation__menu-up">
                        <ul>
                            {navigationMenu.map(u=><li key={`${u.id}_${u}`} onClick={()=>setSelectedCategoryOnClick(u)} >{u} <img className={u === selectedCategory ?"img-active":""} src={down_arrow} alt=""/></li>)}
                        </ul>

                    </div>
                    <div className="navigation__menu-mobile">
                        <img onClick={onNavMenuCLick} src={nav_settings} alt="settings"/>
                        <div  className={isNavMenuOpen ? "navigation__menu-mobile-list":"navigation__menu-mobile-list none"}>
                            <ul>
                                {navigationMenu.map(u=><li key={`${u.id}_${u}`} onClick={()=>setSelectedCategoryOnClick(u)} >{u} </li>)}
                            </ul>

                        </div>
                    </div>
                    <div className= "navigation__menu-down">
                        <ul>
                            {categories[selectedCategory].map(u=> <li key={`${u.id}_${u}`} onClick={()=>setSelectedColorOnClick(u,selectedCategory )}  className={u === selectedCategoryItem ? 'active':''} >{u} <span>22</span></li>)}
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}