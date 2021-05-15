import './css/style.scss';
// import {Header} from "./Components/Header/Header";
import React from "react";
import {FooterContainer} from "./Components/Footer/FooterContainer";
import {NavigationContainer} from "./Components/Navigation/NavigationContainer";
import {Products} from "./Components/Products/Products";
import {Route} from "react-router-dom";
import {ItemPageContainer} from "./Components/Item-page/ItemPageContainer";
import CartContainer from "./Components/Cart/CartContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {Slider} from "./Components/Slider/Slider";

function App() {
  return (
    <div>
      <HeaderContainer/>
      <NavigationContainer/>
        <Route path={"/"} render={ ()=><Products/> } exact/>
        <Route path={"/cart"}  render={ ()=><CartContainer/> }/>
        <Route exact path={"/item/:itemId?"} render={ (props)=> <ItemPageContainer {...props}/> }/>
      <FooterContainer/>
    </div>
  );
}

export default App;
