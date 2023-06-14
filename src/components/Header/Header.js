import React, {useState} from 'react';
import "./header.css"

const Header = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [inMenuClicked, setInMenuClicked] = useState(false)


    const updateMenu = () => {
        if (!inMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setInMenuClicked(!inMenuClicked)
    }
    return (
        <div id="header">
            <div className="container">
                <div className="navbar">
                    <img src="https://excoin.in/wp-content/uploads/logo.svg" alt=""/>
                    <div className="navbar-nav">
                        <ul className="navbar_ul">
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Отзывы</a></li>
                            <li><a href="#">Правила</a></li>
                            <li><a href="#">Тарифы</a></li>
                            <li><a href="#">AML и KYC</a></li>
                            <li><a href="#">Поддержка</a></li>
                        </ul>
                        <div className="navbar-contact">
                            <img src="https://excoin.in/wp-content/uploads/telegram.svg" alt=""/>
                            <a href="tg://resolve?domain=excoin_in" target="_blank">Telegram</a>
                        </div>
                        <div className="navbar-contact">
                            <img src="https://excoin.in/wp-content/uploads/email.svg" alt=""/>
                            <a href="mailto:support@excoin.in" target="_blank">Email</a>
                        </div>
                        <div className="navbar-button">
                            <button className="btn">Войти</button>
                            <button className="btn-one">Регисрация</button>
                        </div>
                    </div>
                </div>
                <div>
                    <nav>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </nav>
                </div>
                <div className={menu_class}>

                </div>
            </div>
        </div>
    );
};

export default Header;