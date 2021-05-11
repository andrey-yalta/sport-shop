import React from "react";
import {Field} from "redux-form";
import {maxLength25, minLength3, requiredField} from "../../../assets/validators/validators";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <div>
            <input className={(touched && error) ? "cart-input__error": ""} {...input} placeholder={label} type={type} />
            {touched && error && <span className={'cart-inputs__error'}>{error}</span>}
        </div>
    </div>
)

export const DataInputs = ()=>{

    return(
        <div  className="cart-inputs__data input" >
            <h4>ваши данные</h4>
            <Field component={renderField} validate={[requiredField,maxLength25,minLength3]} name={"Name"} label="ИМЯ"/>
            <Field component={renderField} validate={[requiredField,maxLength25,minLength3]} name={"last-name"} label="ФАМИЛИЯ"/>
            <Field component={renderField} validate={[requiredField,maxLength25,minLength3]} name={"father-name"} label="ОТЧЕСТВО"/>
            <Field component={renderField} validate={[requiredField,maxLength25,minLength3]} name={"number"} label="ТЕЛЕФОН"/>
        </div>
    )
}

// export const DataInputsRedux = reduxForm({
//     form:"data"
// })(DataInputs)