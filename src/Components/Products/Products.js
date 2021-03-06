import React from "react"
import {Product} from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getShoes, setSelectedPage} from "../../redux/shoes-reducer";
import {addShoesToCart} from "../../redux/cart-reducer";
import ReactPaginate from "react-paginate"
import MyLoader from "./Product/ProductLoader";

export const Products = ()=>{
    const SelectedSex = useSelector(state => state.shopPage.SelectedSex)
    const SelectedColor = useSelector(state => state.shopPage.SelectedColor)
    const SelectedSize = useSelector(state => state.shopPage.SelectedSize)
    const SelectedBrand = useSelector(state => state.shopPage.SelectedBrand)
    const SelectedPage= useSelector(state => state.shopPage.SelectedPage)
    const totalCountItems= useSelector(state => state.shopPage.totalCountItems)
    let totalPages = Math.ceil(totalCountItems/8)
    const SearchLike = useSelector(state => state.shopPage.SearchLike)
    const SelectedPriceSortBy = useSelector(state => state.shopPage.SelectedPriceSortBy)
    const shoes = useSelector(state => state.shopPage.shoes)

    const dispatch = useDispatch()
    React.useEffect(()=>{
            console.log('dispatch')
            dispatch(getShoes({SelectedSex,SelectedColor,SelectedSize,SelectedBrand,SelectedPriceSortBy,nameLikeIs:SearchLike,SelectedPage}))
    },[SelectedColor, SelectedSex,SelectedSize, dispatch,SelectedBrand,SelectedPriceSortBy,SearchLike,SelectedPage])


    const onAddItemToCart = (id)=>{
        const addedItem = {...shoes.filter(u=>u.id === id)[0]}
        addedItem.selectedColor = addedItem.colors[0]
        addedItem.selectedSize = addedItem.sizes[0]
        dispatch(addShoesToCart(addedItem));
    }

    const onCLickToNextPage = ({selected})=>{
        dispatch(setSelectedPage(selected+1))
    }

    return(
        <div className={"products"}>

            <div className="products-items">
                {shoes.length===0?  Array(8).fill(0)
                    .map((_, index) => <MyLoader key={index} />): shoes.map( u=><Product {...u} onAddItemToCartHandler = {onAddItemToCart} key={`${u.id}_${u.name}`}/> )}
            </div>

            <div className={'products__paginator'}>
                <ReactPaginate
                    previousLabel={"????????"}
                    nextLabel={"????????"}
                    pageCount={totalPages}
                    onPageChange={onCLickToNextPage}
                    containerClassName={'products__paginator-ul'}
                    previousLinkClassName={'products__paginator-prev'}
                    disabledClassName={'disabled'}
                    activeClassName={'products__paginator-active'}
                />
            </div>
        </div>

    )
}