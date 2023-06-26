import React, {useState} from 'react';
import "./header.css"
import {NavLink} from 'react-router-dom'


const Header = ({children}) => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [inMenuClicked, setInMenuClicked] = useState(false)
    const [activeLink, setActiveLink] = useState(false)

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
                    <img className="logo" src="https://excoin.in/wp-content/uploads/logo.svg" alt=""/>
                    <div className="navbar-nav">
                        <ul className="navbar_ul">
                            <li className={activeLink ? "li_active active" : "li_active"}><NavLink
                                to="/">Главная</NavLink></li>
                            <li className={activeLink ? "li_active active" : "li_active"}><NavLink
                                to="/reviews">Отзывы</NavLink></li>
                            <li className={activeLink ? "li_active active" : "li_active"}><NavLink
                                to="/rules">Правила</NavLink></li>
                            <li className={activeLink ? "li_active active" : "li_active"}><NavLink
                                to="/rates">Тарифы</NavLink></li>
                            <li className={activeLink ? "li_active active" : "li_active"}><NavLink to="/country">AML и
                                KYC</NavLink></li>
                            <li className={activeLink ? "li_active active" : "li_active"}><NavLink
                                to="/support">Поддержка</NavLink></li>
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
                            <NavLink to="/registration">
                                <button className="btn-one">Регисрация</button>
                            </NavLink>
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
                <div style={{display: "flex", justifyContent: 'space-between', marginTop: "40px"}}>
                    <div>
                        {children}
                    </div>
                    <div>
                        <div className="all_components">
                            <div className="black">

                            </div>
                            <div className="widget">

                            </div>
                            <div className="widget_news_div">

                            </div>
                            <div className="lobmen_widget">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;