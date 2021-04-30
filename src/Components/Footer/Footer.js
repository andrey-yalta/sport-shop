import React from 'react'
import footer_logo from '../../assets/img/footer-logo.png'
export const Footer =()=>{
    return(
        <footer className="footer">
            <div className="footer__logo">
                <img src={footer_logo} alt="street funky"/>
            </div>
            <div className="footer__nav">
                <ul>
                    <li className="active">Магазин</li>
                    <li>Мужчины</li>
                    <li>Женщины</li>
                    <li>Распродажа</li>
                </ul>


                <ul>
                    <li className="active">Главная</li>
                    <li>Отзывы</li>
                    <li>О нас</li>
                    <li>Контакты</li>
                </ul>

                <ul>
                    <li className="active">Подпишись</li>
                    <li>Vk</li>
                    <li>Instagram</li>
                    <li>FAcebook</li>
                </ul>
            </div>
        </footer>
    )
}