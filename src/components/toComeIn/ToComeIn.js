import React from 'react';
import "./toComeIn.css"
import Header from "../Header/Header";

const ToComeIn = () => {
    return (
        <>
            <Header>
                <div className="homeobmentable_tocomein">
                    <h1 className="titlepage">Авторизация</h1>
                    <div className="come">
                        <h2>Партнёрам</h2>
                        <p>Мы предлагаем вам зарегистрироваться в личном кабинет, чтобы активировать накопительную
                            систему скидок, отслеживать <br/> статус ваших заявок и статистику обменов.</p>
                        <p className="come_pro">Также мы предлагает вам поучаствовать в партнерской программе по
                            привлечению клиентов.
                            Зарегистрировавшись в нашей партнерской программе, вы будете получать процент от суммы
                            обмена. После регистрации вы получите на выбор большое количество различных промо-материалов
                            (тексты, баннеры), а также файл экспорта курсов для мониторингов. Все, что потребуется – это
                            приглашать посетителей на наш сайт, размещая промо-материалы на своих домашних страницах,
                            блогах, форумах, сервисах вопросов и ответов, досках объявлений и на других ресурсах. Ваша
                            ссылка будет содержать уникальный код, который позволит определить, что посетитель пришел по
                            ссылке именно от вас.</p>
                        <h2>Регистрация</h2>
                        <p>Для регистрации в кабинете, пройдите по этой ссылке и заполните простую форму. Перед
                            регистрацией вам будет необходимо ознакомиться с условиями работы и принять пользовательское
                            соглашение.</p>
                        <h2>Вход</h2>
                        <p>Если вы уже являетесь зарегистрированным пользователем нашего сайта, выполните вход,
                            используя следующую форму авторизации:</p>
                        <div>
                            <div>
                                <label className="come-label">Логин или e-mail <span
                                    className="come-span">*</span>:</label>
                                <div className="form_field_ins">
                                    <input type="text" id="form_field_id-1-logmail" name="logmail"/>
                                    <div className="form_field_errors">
                                        <div className="form_field_errors_ins"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="come-label">Пароль<span className="come-span">*</span>:</label>
                                <div className="form_field_ins">
                                    <input type="password" id="form_field_id-1-logmail" name="logmail"/>
                                    <div className="form_field_errors">
                                        <div className="form_field_errors_ins"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="log_line_subm_left">
                                <div>
                                    <input type="submit" formTarget="_top" name="submit" className="log_submit-one"
                                           value="Войти"/>
                                </div>
                                <div className="log_line_subm_right_pro">
                                    <div>
                                        <a href="https://excoin.in/register/">Регистрация</a>
                                    </div>
                                    <div>
                                        <a href="https://excoin.in/register/">Забыли пароль?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default ToComeIn;