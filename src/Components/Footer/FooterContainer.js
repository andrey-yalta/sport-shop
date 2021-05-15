import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import {setSelectedSex} from "../../redux/shoes-reducer";
import {Footer} from "./Footer";
export const FooterContainer =()=>{
    const dispatch = useDispatch();
    const category = useSelector(state => state.shopPage.category);
    const [selectedCategory, setSelectedCategory] = React.useState(category[0])

    const setSelectedCategoryOnClick = React.useCallback((sex) => {
        setSelectedCategory(sex);
        dispatch(setSelectedSex(sex));
    }, [dispatch]);
    return(
        <Footer category={category} selectedCategory={selectedCategory} setSelectedCategoryOnClick={setSelectedCategoryOnClick}/>
    )
}