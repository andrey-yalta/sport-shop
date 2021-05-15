import {ItemPage} from "./ItemPage";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {getShoes} from "../../redux/shoes-reducer";
import {addShoesToCart} from "../../redux/cart-reducer";


export const ItemPageContainer = (props)=>{

    const itemId =  props.match.params.itemId
    const dispatch = useDispatch();
    const shoes = useSelector(state => state.shopPage.shoes)
    React.useEffect(()=>{
        if(shoes.length === 0){

            dispatch(getShoes({id:itemId}));
        }

    },[dispatch, itemId, shoes])

    const shoesItem = shoes.filter(u=>u.id === itemId)[0]

    const onAddItemToCartHandler = (id,selectedSize,selectedColor)=>{

        const addedItem = {...shoes.filter(u=>u.id === id)[0]}

        addedItem.selectedColor = selectedColor
        addedItem.selectedSize = selectedSize
        dispatch(addShoesToCart(addedItem));
    }
    if(!shoesItem){
        return <div> Loaded</div>
    }

    return <ItemPage {...shoesItem} onAddItemToCartHandler={onAddItemToCartHandler} />
}