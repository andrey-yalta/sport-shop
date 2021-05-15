import React from 'react'
import down_arrow from '../../assets/img/down-arrow.png'
import nav_settings from '../../assets/img/nav-settings.png'
import {HeaderContainer} from "../Header/HeaderContainer";

export const Navigation =({scroll,scrollPrev,navigationMenu,setSelectedCategoryOnClick,
                              selectedCategory,onNavMenuCLick,isNavMenuOpen,categories,
                              setSelectedColorOnClick,selectedCategoryItem})=>{

    return(
        <div   className={" navigation sticky"}>
            <div className={"navigation__header-scroll-up"}>
                {((scroll > 160) && (scrollPrev > scroll))? <HeaderContainer isHeaderScroll={true} /> :null}
            </div>
            <div className={"navigation-body"}>
                <div className="navigation-body__header">
                    <h1>Мужская обувь</h1>
                </div>
                <div className="navigation-body__settings">
                    <nav className="navigation-body__menu-up">
                        <ul>
                            {navigationMenu.map(u=><li key={`${u.id}_${u}`} onClick={()=>setSelectedCategoryOnClick(u)} >{u} <img className={u === selectedCategory ?"img-active":""} src={down_arrow} alt=""/></li>)}
                        </ul>

                    </nav>
                    <div className="navigation-body__menu-mobile">
                        <img onClick={onNavMenuCLick} src={nav_settings} alt="settings"/>
                        <nav  className={isNavMenuOpen ? "navigation-body__menu-mobile-list":"navigation-body__menu-mobile-list none"}>
                            <ul>
                                {navigationMenu.map(u=><li key={`${u.id}_${u}`} onClick={()=>setSelectedCategoryOnClick(u)} >{u} </li>)}
                            </ul>

                        </nav>
                    </div>
                    <nav className= "navigation-body__menu-down">
                        <ul>
                            {categories[selectedCategory].map(u=> <li key={`${u.id}_${u}`} onClick={()=>setSelectedColorOnClick(u,selectedCategory )}  className={u === selectedCategoryItem ? 'active':''} >{u} <span>22</span></li>)}
                        </ul>
                    </nav>

                </div>
            </div>

        </div>

    )
}
