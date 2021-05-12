import React from "react";
import {Formik} from "formik";
import * as yup from "yup"
import master_card from "../../../assets/img/master-card.png";
import visa from "../../../assets/img/visa.png";
import mir from "../../../assets/img/mir.png";

export const FormicInputs = ()=>{
    const validationSchema = yup.object().shape({
        name:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        lastName:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        fatherName:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        number:yup.number().typeError("должно быть числом").required('Обязательно для заполнения'),
        city:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        street:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        houseNumber:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        platNumber:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        regionIndex:yup.number().typeError("должно быть числом").required('Обязательно для заполнения'),
        cartId:yup.number().typeError("должно быть числом").required('Обязательно для заполнения'),
        cartMonth:yup.number().typeError("должно быть числом").required('Обязательно для заполнения'),
        cartYear:yup.number().typeError("должно быть числом").required('Обязательно для заполнения'),
        cartUser:yup.string().typeError("должно быть строкой").required('Обязательно для заполнения'),
        cartCvs:yup.number().typeError("должно быть числом").required('Обязательно для заполнения'),
    })
    return(
        <Formik
        initialValues={{name:"", lastName:"", fatherName:"", number:"", city:"",street:"",houseNumber:"",
            platNumber:"",regionIndex:"",cartId:"",cartMonth:"",cartYear:"",cartUser:"",cartCvs:""}}
        validateOnBLur validationSchema={validationSchema } onSubmit={(values)=>{console.log(values)}} >
            {({values, errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty}
                  )=>(
                    <div>
                        <div className={"cart-inputs__data input"}>
                            <input type="text" name="name" placeholder="Имя" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                            {touched.name && errors.name && <p className={"cart-inputs__error"}>{ errors.name}</p>}
                            <input type="text" name="lastName" placeholder="Фамилия" onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>
                            {touched.lastName && errors.lastName && <p className={"cart-inputs__error"}>{ errors.lastName}</p>}
                            <input type="text" name="fatherName" placeholder="Отчество" onChange={handleChange} onBlur={handleBlur} value={values.fatherName}/>
                            {touched.fatherName && errors.fatherName && <p className={"cart-inputs__error"}>{ errors.fatherName}</p>}
                            <input type="tel" name="number" placeholder="телефон" onChange={handleChange} onBlur={handleBlur} value={values.number}/>
                            {touched.number && errors.number && <p className={"cart-inputs__error"}>{ errors.number}</p>}
                        </div>
                        <div className="cart-inputs__delivery input">
                            <h4>Данные доставки</h4>
                            <input type="text" name="city" placeholder="Город" onChange={handleChange} onBlur={handleBlur} value={values.city}/>
                            {touched.city && errors.city && <p className={"cart-inputs__error"}>{ errors.city}</p>}
                            <input type="text" name="street" placeholder="Улица" onChange={handleChange} onBlur={handleBlur} value={values.street}/>
                            {touched.street && errors.street && <p className={"cart-inputs__error"}>{ errors.street}</p>}
                            <input type="text" name="houseNumber" placeholder="Номер дома" onChange={handleChange} onBlur={handleBlur} value={values.houseNumber}/>
                            {touched.houseNumber && errors.houseNumber && <p className={"cart-inputs__error"}>{ errors.houseNumber}</p>}
                            <input type="text" name="platNumber" placeholder="Номер квартиры" onChange={handleChange} onBlur={handleBlur} value={values.platNumber}/>
                            {touched.platNumber && errors.platNumber && <p className={"cart-inputs__error"}>{ errors.platNumber}</p>}
                            <input type="text" name="regionIndex" placeholder="индекс" onChange={handleChange} onBlur={handleBlur} value={values.regionIndex}/>
                            {touched.regionIndex && errors.regionIndex && <p className={"cart-inputs__error"}>{ errors.regionIndex}</p>}
                        </div>
                        <div className="cart-inputs__bank-cart input">
                            <div className="bank-cart-title">
                                <h4>Данные для оплаты</h4>
                                <img src={master_card} alt="master-card"/>
                                <img src={visa} alt="vise"/>
                                <img src={mir} alt="mir"/>
                            </div>
                            <input type="number" name="cartId" placeholder="Номер карты" onChange={handleChange} onBlur={handleBlur} value={values.cartId}/>
                            {touched.cartId && errors.cartId && <p className={"cart-inputs__error"}>{ errors.cartId}</p>}
                            <div className="bank-cart-date">
                                <input type="number" name="cartMonth" placeholder="ММ" onChange={handleChange} onBlur={handleBlur} value={values.cartMonth}/>
                                {touched.cartMonth && errors.cartMonth && <p className={"cart-inputs__error"}>{ errors.cartMonth}</p>}
                                <div className="bank-cart-line"/>
                                <input type="number" name="cartYear" placeholder="ГГ" onChange={handleChange} onBlur={handleBlur} value={values.cartYear}/>
                                {touched.cartYear && errors.cartYear && <p className={"cart-inputs__error"}>{ errors.cartYear}</p>}
                            </div>
                            <input type="text" name="cartUser" placeholder="Имя пользователя карты" onChange={handleChange} onBlur={handleBlur} value={values.cartUser}/>
                            {touched.cartUser && errors.cartUser && <p className={"cart-inputs__error"}>{ errors.cartUser}</p>}
                            <div className="bank-cart-cvs">
                                <span>Последние 3 цифры на обратной стороне карты</span>
                                <input type="number" name="cartCvs" placeholder="CVS" onChange={handleChange} onBlur={handleBlur} value={values.cartCvs}/>
                                {touched.cartCvs && errors.cartCvs && <p className={"cart-inputs__error"}>{ errors.cartCvs}</p>}
                            </div>
                        </div>
                        <div >
                            <button  className={!isValid?"cart-button disabled":"cart-button"} disabled={!isValid} onClick={handleSubmit} type={'submit'}>
                                оплатить
                            </button>
                        </div>
                    </div>
            )}
        </Formik>
    )
}