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
                    <NavLink to="/registration">
                        <button className="btn-one">Регисрация</button>
                    </NavLink>
                </div>
                <div style={{display: "flex", justifyContent: 'space-between', marginTop: "40px"}}>
                    <div>
                        {children}
                    </div>
                    <div>
                        <div className="all_components">
                            <div className="black">
                                <h1 className="black-authorization">Авторизация</h1>
                                <form>
                                    <input type="text"/>
                                    <input type="password"/>
                                </form>
                                <div className="forgot-your-password">
                                    <a href="#">Забыли пароль?</a>
                                    <a href="#">Регистрация</a>
                                </div>
                                <div className="wlinesubmit-one">
                                    <input type="submit" formTarget="_top" name="" value="Войти"/>
                                </div>
                            </div>
                            <div className="widget">
                                <h1 className="widget-reviews">Отзывы</h1>
                                <div>
                                    <div className="flex">
                                        <h4 className="widget_reviews_author">Владимир,</h4>
                                        <h6 className="widget_reviews_date">15.02.2022, 15:22</h6>
                                    </div>
                                    <p className="widget_reviews_content">Лучший обменник</p>
                                    <div className="widget_line"/>
                                </div>
                                <div>
                                    <div className="flex">
                                        <h4 className="widget_reviews_author">Евгений,</h4>
                                        <h6 className="widget_reviews_date">14.02.2022, 11:24</h6>
                                    </div>
                                    <p className="widget_reviews_content">Давно меняю на экскоине и ни разу не
                                        подводили. Так…</p>
                                    <div className="widget_line"/>
                                </div>
                                <div>
                                    <div className="flex">
                                        <h4 className="widget_reviews_author">Дима,</h4>
                                        <h6 className="widget_reviews_date">11.02.2022, 14:23</h6>
                                    </div>
                                    <p className="widget_reviews_content">Спасибо за обмен и хорошую ставку Долго ждать
                                        подтверждений пришлось…</p>
                                    <div className="widget_line"/>
                                </div>
                                <div>
                                    <div className="flex">
                                        <h4 className="widget_reviews_author">Галина,</h4>
                                        <h6 className="widget_reviews_date">08.02.2022, 15:34</h6>
                                    </div>
                                    <p className="widget_reviews_content">Мне все понравилось, надеюсь что бонус
                                        пришлете:)</p>
                                    <div className="widget_line"/>
                                </div>
                                <div>
                                    <div className="flex">
                                        <h4 className="widget_reviews_author">Маша,</h4>
                                        <h6 className="widget_reviews_date">01.02.2022, 09:48</h6>
                                    </div>
                                    <p className="widget_reviews_content">спасибо за хорошую ставку и отдельное спасибо
                                        менеджеру Владимиру за…</p>
                                    <div className="widget_line"/>
                                </div>
                                <button className="widget-btn">Все отзывы (21)</button>

                            </div>

                            <div className="widget_news_div">
                                <h1 className="widget_news_support">Новости</h1>
                                <div>
                                    <div className="flex-one">
                                        <div className="widget_news_date">
                                            <div className="wmon">Feb.</div>
                                            <div className="wdate">14</div>
                                        </div>
                                        <div>
                                            <p className="widget_news_div_text">Криптовалюта в наши <br/> дни является
                                                одной
                                                из самых горячих тем…</p>
                                        </div>
                                    </div>
                                    <a className="widget_news_more" href="#">Подробнее</a>
                                    <div className="widget_line-one"/>
                                </div>
                                <div>
                                    <div className="flex-one">
                                        <div className="widget_news_date">
                                            <div className="wmon">Dec.</div>
                                            <div className="wdate">18</div>
                                        </div>
                                        <div>
                                            <p className="widget_news_div_text">Криптовалюты — это <br/> активы, которые
                                                не
                                                представляют никакой <br/> материальной ценности,…</p>
                                        </div>
                                    </div>
                                    <a className="widget_news_more" href="#">Подробнее</a>
                                    <div className="widget_line-one"/>
                                </div>
                                <div>
                                    <div className="flex-one">
                                        <div className="widget_news_date">
                                            <div className="wmon">Nov.</div>
                                            <div className="wdate">16</div>
                                        </div>
                                        <div>
                                            <p className="widget_news_div_text">На базе первой в <br/> мире цифровой <br/> валюты
                                                отрабатывались методы, варианты…</p>
                                        </div>
                                    </div>
                                    <a className="widget_news_more" href="#">Подробнее</a>
                                    <div className="widget_line-one"/>
                                </div>
                                <div>
                                    <div className="flex-one">
                                        <div className="widget_news_date">
                                            <div className="wmon">Feb.</div>
                                            <div className="wdate">12</div>
                                        </div>
                                        <div>
                                            <p className="widget_news_div_text">Добавили новые валюты zcash и риппл на сайт.</p>
                                        </div>
                                    </div>
                                    <a className="widget_news_more" href="#">Подробнее</a>
                                    <div className="widget_line-one"/>
                                </div>
                                <div>
                                    <div className="flex-one">
                                        <div className="widget_news_date">
                                            <div className="wmon">Feb.</div>
                                            <div className="wdate">12</div>
                                        </div>
                                        <div>
                                            <p className="widget_news_div_text">Мы добавили новые валюты на сайт.</p>
                                        </div>
                                    </div>
                                    <a className="widget_news_more" href="#">Подробнее</a>
                                    <div className="widget_line-one"/>
                                </div>
                                <button className="widget-btn-one">Все новости (6)</button>
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