
import './css/style.scss';
import {Header} from "./Components/Header/Header";
import React from "react";
import {Footer} from "./Components/Footer/Footer";
import {Navigation} from "./Components/Navigation/Navigation";
import {PaginateProducts} from "./Components/Products/PaginateProfucts";
import {Route} from "react-router-dom";
import {ItemPageContainer} from "./Components/Item-page/ItemPageContainer";
import CartContainer from "./Components/Cart/CartContainer";

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
        <Route path={"/"} render={ ()=><PaginateProducts/> } exact/>
        <Route path={"/cart"} render={ ()=><CartContainer/> }/>
        <Route exact path={"/item/:itemId?"} render={ (props)=> <ItemPageContainer {...props}/> }/>
      <Footer/>
    </div>
  );
}

export default App;
