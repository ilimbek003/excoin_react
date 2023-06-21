import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="all-footer">
                    <div className="footer_in">
                        <img className="logo" src="https://excoin.in/wp-content/uploads/logo.svg" alt=""/>
                        <p>С 10:00 до 22:00, с 23:00 до 09:00 МСК
                            Ежедневно</p>
                    </div>
                    <div className="footer_all-home">
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Отзывы</a></li>
                            <li><a href="#">Тарифы</a></li>
                            <li><a href="#">Поддержка</a></li>
                        </ul>
                    </div>
                    <div className="footer_all-home">
                        <ul>
                            <li><a href="#">Авторизация</a></li>
                            <li><a href="#">Восстановить пароль</a></li>
                            <li><a href="#">Регистрация</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer_all-home">
                        <ul>
                            <li><a href="#">Правила сервиса</a></li>
                            <li><a href="#">Политика конфиденциальности</a></li>
                            <li><a href="#">Отказ от ответственности</a></li>
                            <li><a href="#">Карта сайта</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="phone-email-tel">
                            <img src="https://excoin.in/wp-content/uploads/mobile.svg" alt=""/>
                            <a href="#">Мобильная версия</a>
                        </div>
                        <div className="phone-email-tel">
                            <img src="https://excoin.in/wp-content/uploads/telegram.svg" alt=""/>
                            <a href="tg://resolve?domain=excoin_in" target="_blank">Telegram</a>
                        </div>
                        <div className="phone-email-tel">
                            <img src="https://excoin.in/wp-content/uploads/email.svg" alt=""/>
                            <a href="mailto:support@excoin.in" target="_blank">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;