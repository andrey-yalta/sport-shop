
import './css/style.scss';
import {Header} from "./Components/Header/Header";
import React from "react";
import {Footer} from "./Components/Footer/Footer";
import {Navigation} from "./Components/Navigation/Navigation";
import {Products} from "./Components/Products/Products";
import {Route} from "react-router-dom";
import {Cart} from "./Components/Cart/Cart";
import {ItemPage} from "./Components/Item-page/ItemPage";

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
        <Route path={"/"} render={ ()=><Products/> } exact/>
        <Route path={"/cart"} render={ ()=><Cart/> }/>
        <Route path={"/item"} render={ ()=><ItemPage/> }/>

      <Footer/>
    </div>
  );
}

export default App;
