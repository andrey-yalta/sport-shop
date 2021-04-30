import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware from "redux-thunk";

import shoesReducer from "./shoes-reducer";
import cartReducer from "./cart-reducer";


let reducers = combineReducers({
    shopPage:shoesReducer,
    cartPage:cartReducer,


});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;