import React from "react"
import {Product} from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getShoes} from "../../redux/shoes-reducer";
import {addShoesToCart} from "../../redux/cart-reducer";

export const Products = ()=>{
    const SelectedSex = useSelector(state => state.shopPage.SelectedSex)
    const SelectedColor = useSelector(state => state.shopPage.SelectedColor)
    const SelectedSize = useSelector(state => state.shopPage.SelectedSize)
    const SelectedBrand = useSelector(state => state.shopPage.SelectedBrand)
    const SearchLike = useSelector(state => state.shopPage.SearchLike)
    const SelectedPriceSortBy = useSelector(state => state.shopPage.SelectedPriceSortBy)
    const dispatch = useDispatch()
    React.useEffect(()=>{

        dispatch(getShoes(SelectedSex,SelectedColor,SelectedSize,SelectedBrand,SelectedPriceSortBy,SearchLike))

    },[SelectedColor, SelectedSex,SelectedSize, dispatch,SelectedBrand,SelectedPriceSortBy,SearchLike])
    const shoes = useSelector(state => state.shopPage.shoes)


    const onAddItemToCart = (id)=>{

        const addedItem = {...shoes.filter(u=>u.id === id)[0]}
        addedItem.selectedColor = addedItem.colors[0]
        addedItem.selectedSize = addedItem.sizes[0]
        dispatch(addShoesToCart(addedItem));
    }

    return(
        <div className="products">
            {shoes.map( u=><Product {...u} onAddItemToCartHandler = {onAddItemToCart} key={`${u.id}_${u.name}`}/> ) }


        </div>
    )
}