import React from 'react'
import down_arrow from '../../assets/img/down-arrow.png'
import nav_settings from '../../assets/img/nav-settings.png'
import {useSelector} from "react-redux";


export const Navigation = ()=>{
    const brandsCategories = useSelector(state => state.shopPage.brandsCategories);
    const [selectedCategory, setSelectedCategory] = React.useState("NIKE")
    const setSelectedCategoryOnClick = (item)=>{
        setSelectedCategory(item);
    }
    return(
        <div className="navigation">
            <div className="navigation__header">
                <h1>Мужская обувь</h1>
            </div>
            <div className="navigation__settings">
                <div className="navigation__menu-up">
                    <ul>

                        <li>Бренд <img className="img-active" src={down_arrow} alt=""/></li>
                        <li>Размер <img src={down_arrow} alt=""/></li>
                        <li>Цвет <img src={down_arrow} alt=""/></li>
                        <li>Цена <img src={down_arrow} alt=""/></li>
                    </ul>

                </div>
                <div className="navigation__menu-mobile">
                    <img src={nav_settings} alt="settings"/>
                </div>
                <div className="navigation__menu-down">
                    <ul>
                        {Object.keys(brandsCategories).map(u=> <li key={`${u.id}_${u}`} onClick={()=>setSelectedCategoryOnClick(u)}  className={u === selectedCategory ? 'active':''} >{u} <span>{brandsCategories[u]}</span></li>)}
                    </ul>
                </div>

            </div>
        </div>
    )
}