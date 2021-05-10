import {shoesApi} from "../api/shopApi";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_SHOES = "SET_SHOES";
const SET_SELECTED_SEX = "SET_SELECTED_SEX";
const SET_SELECTED_COLOR = "SET_SELECTED_COLOR";
const SET_SELECTED_SIZE = "SET_SELECTED_SIZE";
const SET_SELECTED_BRAND = "SET_SELECTED_BRAND";
const SET_SELECTED_PRICE_SORT_BY = "SET_SELECTED_PRICE_SORT_BY";

let initialState = {
    shoes:[],
    isFetching:false,
    SelectedSex:"men",
    SelectedPriceSortBy:null,
    SelectedColor:null,
    SelectedSize:null,
    SelectedBrand:"NIKE",
    brandsCategories: [
        "NIKE",
        "ADIDAS",
        "NEW BALANCE",
        "CONVERSE",
        "VANS",
        "PUMA",
        "ALL"
    ],
    priceSort:["asc","desc"],
    colors:["white","gray","black","red","blue", "all"],
    sizes:[39, 40, 41, 42, 43, 44, 45, 46,"all"],
    category :["men","women","sale"],
    categories: ["Мясные", "Вегетерианские", "Острые","Гриль", "Закрытые"],
    sortsArray:[ { name: 'популярности', type: 'popular', order: 'desc' },
        { name: 'цене', type: 'price', order: 'desc' },
        { name: 'алфавит', type: 'name', order: 'asc' }]


};
const shoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_SHOES:
            return {
                ...state,shoes: action.shoes,
            }
        case SET_SELECTED_SEX:
            return {
                ...state,SelectedSex: action.SelectedSex,
            }
        case SET_SELECTED_SIZE:
            return {
                ...state,SelectedSize: action.SelectedSize,
            }
        case SET_SELECTED_COLOR:

            return {
                ...state,SelectedColor: action.SelectedColor,
            }
        case SET_SELECTED_BRAND:

            return {
                ...state,SelectedBrand: action.SelectedBrand,
            }
        case SET_SELECTED_PRICE_SORT_BY:
            return {
                ...state,SelectedPriceSortBy: action.setSelectedPriceSortBy,
            }
        default:
            return state;
    }
}
export default shoesReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const setShoes = (shoes) =>{
    return {type:SET_SHOES,shoes}
};
export const setSelectedSex = (SelectedSex) =>{
    return {type:SET_SELECTED_SEX,SelectedSex}
};

export const setSelectedColor = (SelectedColor) =>{
    return {type:SET_SELECTED_COLOR,SelectedColor}
};
export const setSelectedSize = (SelectedSize) =>{
    return {type:SET_SELECTED_SIZE,SelectedSize}
};
export const setSelectedBrand = (SelectedBrand) =>{
    return {type:SET_SELECTED_BRAND,SelectedBrand}
};
export const setSelectedPriceSortBy = (setSelectedPriceSortBy) =>{
    return {type:SET_SELECTED_PRICE_SORT_BY,setSelectedPriceSortBy}
};

export const getShoes = (SelectedSex='men',SelectedColor=null,SelectedSizes=null,SelectedBrand=null,SelectedPriceSortBy=null) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию

        let data = await shoesApi.getShoes(SelectedSex,SelectedColor,SelectedSizes,SelectedBrand,SelectedPriceSortBy);
        dispatch(toggleIsFetching(false));
        dispatch(setShoes(data));
    }
}