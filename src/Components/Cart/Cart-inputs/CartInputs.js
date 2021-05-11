import React from 'react'
import master_card from "../../../assets/img/master-card.png";
import visa from "../../../assets/img/visa.png";
import mir from "../../../assets/img/mir.png";
import {DataInputs} from "./DataInputs";
import {reduxForm} from "redux-form";
export const CartInputs = (props)=>{

    return (<form onSubmit={props.handleSubmit} className="cart-inputs">

        <DataInputs />

        <div className="cart-inputs__delivery input">
            <h4>Данные доставки</h4>
            <input type="text" name="first-name" placeholder="ГОРОД"/>
            <input type="text" name="last-name" placeholder="УЛИЦА"/>
            <input type="text" name="father-name" placeholder="НОМЕР ДОМА"/>
            <input type="tel" name="number" placeholder="КВАРТИРА, НОМЕР ДОМА"/>
            <input type="tel" name="number" placeholder="ИНДЕКС"/>
        </div>

        <div className="cart-inputs__bank-cart input">
            <div className="bank-cart-title">
                <h4>Данные для оплаты</h4>
                <img src={master_card} alt="master-card"/>
                <img src={visa} alt="vise"/>
                <img src={mir} alt="mir"/>
            </div>
            <input type="number" name="cart-Id" placeholder="НОМЕР КАРТЫ"/>
            <div className="bank-cart-date">
                <input type="number" name="cart-month" placeholder="ММ"/>
                <div className="bank-cart-line"/>
                <input type="number" name="cart-year" placeholder="ГГ"/>
            </div>
            <input type="text" name="cart-user" placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ КАРТЫ"/>
            <div className="bank-cart-cvs">
                <span>Последние 3 цифры на обратной стороне карты</span>
                <input type="password" name="cart-cvs" placeholder="CVS"/>
            </div>
        </div>
        <div className="cart-button disabled">
            <button><span>оплатить</span></button>
        </div>
    </form>)
}
export const CartInputsRedux = reduxForm({
    form:"data"
})(CartInputs)