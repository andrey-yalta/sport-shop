import {shopAPI} from "../api/shopApi";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_SHOES = "SET_SHOES";
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const SET_SELECTED_SORT_BY = "SET_SELECTED_SORT_BY";

let initialState = {
    shoes:[],
    isFetching:false,
    SelectedCategory:null,
    SelectedSortBy:0,
    brandsCategories: {
        "NIKE":15,
        "ADDIDAS":22,
        "NEW BALANCE":2,
        "CONVERSE":5,
        "VANS":12,
        "PUMA":43
    },
    category :["Мужчины","Женщины","Распродажа"],
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
        case SET_SELECTED_CATEGORY:
            return {
                ...state,SelectedCategory: action.SelectedCategory,
            }
        case SET_SELECTED_SORT_BY:
            return {
                ...state,SelectedSortBy: action.SelectedSortBy,
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
export const setSelectedCategory = (SelectedCategory) =>{
    return {type:SET_SELECTED_CATEGORY,SelectedCategory}
};
export const setSelectedSortBy = (SelectedSortBy) =>{
    return {type:SET_SELECTED_SORT_BY,SelectedSortBy}
};

export const getShoes = (category,SelectedSortBy) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию
        let data = await shopAPI.getShoes();
        dispatch(toggleIsFetching(false));
        dispatch(setShoes(data));
    }
}