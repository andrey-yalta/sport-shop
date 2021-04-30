import React from "react"
import {Product} from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getShoes} from "../../redux/shoes-reducer";

export const Products = ()=>{
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getShoes());

    },)
    const shoes = useSelector(state => state.shopPage.shoes);

    return(
        <div className="products">
            {shoes.map( u=><Product {...u} key={`${u.id}_${u.name}`}/> ) }


        </div>
    )
}