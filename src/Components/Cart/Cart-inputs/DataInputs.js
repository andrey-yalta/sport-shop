import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength5, minLength3, requiredField} from "../../../assets/validators/validators";



 const DataInputs = (props)=>{

    return(
        <form onSubmit={props.handleSubmit} className="cart-inputs__data input" >
            <h4>ваши данные</h4>
            <Field component={'input'} validate={[requiredField,maxLength5,minLength3]} name={"Name"} placeholder="ИМЯ"/>
            <Field component={'input'} name={"last-name"} placeholder="ФАМИЛИЯ"/>
            <Field component={'input'} name={"father-name"} placeholder="ОТЧЕСТВО"/>
            <Field component={'input'} name={"number"} placeholder="ТЕЛЕФОН"/>
            <button>submit</button>

        </form>
    )
}

export const DataInputsRedux = reduxForm({
    form:"data"
})(DataInputs)