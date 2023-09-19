import React, {useState, useEffect} from 'react';
import "./registration.css"
import Header from "../Header/Header";
import axios from "axios"
import {FaEye, FaEyeSlash} from "react-icons/fa"
import Verify from "./Verify";

const Registration = () => {

    const [inputData, setInputData] = useState(
        {
            "email": "",
            "first_name": "",
            "last_name": "",
            "password": "",
            "confirm_password": ""
        }
    )
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [errors, setErrors] = useState({});
    const [check, setCheck] = useState(false)
    const [checkboxChecked, setCheckboxChecked] = useState({
        checked: check,
        data: inputData
    });
    if (check) {
        localStorage.setItem('data', JSON.stringify((inputData)))
    }
    const handleCheck = () => {
        setCheck(true)
    }
    const [registrationError, setRegistrationError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    console.log(inputData)
    function validation(inputData) {
        const errors = {}
            const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        if (inputData.email === "") {
            errors.email = "email is Required"
        } else if (!email_pattern.test(inputData.email)) {
            errors.email = "Email did'nt match "
        }
        if (inputData.password === "") {
            errors.password = "password is Required"
        } else if (!password_pattern.test(inputData.password)) {
            errors.password = "password didn't match"
        }
        if (inputData.confirm_password !== inputData.password) {
            errors.confirm_password = "password not matched"
        }
        return errors
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation(inputData);

        if (Object.keys(validationErrors).length === 0) {
            const emptyFields = Object.keys(inputData).filter((key) => inputData[key] === '');

            if (emptyFields.length === 0) {
                setErrors({});
                setIsLoading(true);

                axios
                    .post('http://77.232.128.174:8000/auth/register', inputData)
                    .then((res) => {
                        console.log(res);

                        setIsLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                        setIsLoading(false);
                    });

            } else {
                const newErrors = {};
                if (emptyFields && emptyFields.length > 0) {
                    emptyFields.forEach((field) => {
                        newErrors[field] = `${field} is required`;
                    });
                }
                setErrors(newErrors);
            }
        } else {
            setErrors(validationErrors);
        }
    };



    const isUsernameEmpty = inputData.username === '';
    const isEmailEmpty = inputData.email === '';
    const isPasswordEmpty = inputData.password === '';
    const isSubmitDisabled = isUsernameEmpty || isEmailEmpty || isPasswordEmpty;


    return (
        <>
            <Header>
                <div className="homeobmentable">
                    <div className="all-registration">
                        <h1 className="text-h2">Условия регистрации личного и партнерского кабинета</h1>
                        <p>1. Зарегистрированные пользователи получают право использовать накопительную систему скидок
                            при совершение <br/> обмене:</p>
                        <ul>
                            <li>> 100-999 USD – 0.02%</li>
                            <li>> 1000-4999 USD – 0.03%</li>
                            <li>> 5000- 9999 USD – 0.04%</li>
                            <li>> 10000-19999 USD – 0.05%</li>
                            <li>> свыше 20000 USD – 0.06%</li>
                        </ul>
                        <p>2. Начисления и выплаты по партнерской программе ведутся в долларах (WebMoney WMZ).</p>
                        <p>3. Минимальная сумма для снятия заработанных денег с партнерского счета составляет 5 USD.</p>
                        <p>4. За каждый совершенный обмен по вашей партнерской ссылке вы получает вознаграждение в
                            размере от 1% до 6% от суммы обмена. Процент отчислений зависит от суммы совершенных обменов
                            по вашей партнерской ссылке:
                        </p>
                        <ul>
                            <li>> 0-99 USD – 0.01%</li>
                            <li>> 100-999 USD – 0.02%</li>
                            <li>> 1000-4999 USD – 0.03%</li>
                            <li>> 5000- 9999 USD – 0.04%</li>
                            <li>> 10000-19999 USD – 0.05%</li>
                            <li>> свыше 20000 USD – 0.06%</li>
                        </ul>
                        <p>4.1. Указанные значения партнерских вознаграждений быть со временем изменены. При этом все
                            заработанные <br/> средства сохраняются на счете с учетом действовавших ранее ставок.
                        </p>
                        <p>5. На странице, где вы публикуете о нас информацию должно быть четко указано об услугах,
                            предоставляемых нашим сайтом. В рекламных текстах запрещаются любые упоминания о наличии
                            «бесплатных бонусов» на нашем сайте.</p>
                        <p>6. Запрещается размещать партнерскую ссылку:</p>
                        <ul>
                            <li>> в массовых рассылках писем (СПАМ);</li>
                            <li>> на сайтах, принудительно открывающих окна браузера, либо открывающих сайты в скрытых
                                фреймах;
                            </li>
                            <li>> на сайтах, распространяющих любые материалы, прямо или косвенно нарушающие
                                законодательство РФ;
                            </li>
                            <li> на сайтах, публикующих списки сайтов с «бесплатными бонусами»;</li>
                            <li>> на веб-страницах, закрытых от публичного просмотра с помощью авторизации (различные
                                социальные сети, закрытые разделы форумов и т.п.).
                            </li>
                        </ul>
                        <p>Сайты, нарушающие одно или несколько вышеперечисленных правил, будут занесены в черный список
                            нашей партнерской программы. Оплата за посетителей, пришедших с подобных сайтов
                            производиться не будет.</p>
                        <p>7 . При несоблюдении данных условий аккаунт нарушителя будет заблокирован без выплат и
                            объяснения причин.</p>
                        <p>8. Партнер несет полную ответственность за сохранность своих аутентификационных данных
                            (логина и пароля) для доступа к аккаунту.</p>
                        <p>9. Данные условия могут изменяться в одностороннем порядке без оповещения участников
                            программы, но с публикацией на этой странице.</p>
                        <h1 className="text-h1">Регистрация</h1>
                        <p>Пожалуйста, внимательно и аккуратно заполните все поля регистрационной формы. На указанный
                            вами e-mail будет выслано уведомление о регистрации.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="from-label-input">
                            <label>Логин <span className="span">*</span>:</label>
                            <input

                                type="text"
                                value={inputData.first_name}
                                onChange={(e) => setInputData({...inputData, first_name: e.target.value})}
                                name="first_name"
                            />
                            {errors.username && <p style={{
                                color: "red",
                                marginLeft: "10px",
                                marginBottom: "10px"
                            }}>{errors.username}</p>}
                        </div>
                        <div className="from-label-input">
                            <label>имя <span className="span">*</span>:</label>
                            <input
                                type="text"
                                value={inputData.last_name}
                                onChange={(e) => setInputData({...inputData, last_name: e.target.value})}
                                name="last_name"
                            />
                        </div>
                        <div className="from-label-input">
                            <label>E-mail <span className="span">*</span>:</label>
                            <input
                                onChange={

                                    (e) => setInputData({...inputData, email: e.target.value})}
                                value={inputData.email}
                                type="email"
                                name="email"
                            />
                            {errors.email &&
                                <p style={{color: "red", marginLeft: "10px", marginBottom: "10px"}}>{errors.email}</p>}


                        </div>
                        <div className="from-label-input">
                            <label>Пароль <span className="span">*</span>:</label>
                            <input
                                onChange={
                                    (e) => setInputData({...inputData, password: e.target.value})}
                                value={inputData.password}
                                type={visible ? "text" : "password"}
                            />
                            {errors.password && <p style={{
                                color: "red",
                                marginLeft: "10px",
                                marginBottom: "10px"
                            }}>{errors.password}</p>}
                            <span className="span-icon" onClick={() => setVisible(!visible)}> {
                                visible ? <FaEye/> : <FaEyeSlash/>
                            } </span>
                        </div>
                        <div className="from-label-input">
                            <label>Пароль снова <span className="span">*</span>:</label>
                            <input
                                onChange={
                                    (e) => setInputData({...inputData, confirm_password: e.target.value})}
                                value={inputData.confirm_password}
                                type={visible2 ? "text" : "password"}
                                name="password2"
                            />
                            {errors.confirm_password && <p style={{
                                color: "red",
                                marginLeft: "10px",
                                marginBottom: "10px"
                            }}>{errors.confirm_password}</p>}
                            <span className="span-icon" onClick={() => setVisible2(!visible2)}> {
                                visible2 ? <FaEye/> : <FaEyeSlash/>
                            } </span>
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                checked={checkboxChecked}
                                onChange={handleCheck}
                            />
                            <span className="checkbox-span1">С</span>
                            <a className="checkbox-text" href="https://excoin.in/tos/">правилами сервиса</a>
                            <span className="checkbox-span">ознакомлен и согласен</span>
                        </div>
                        <div className="all-submit">
                            <input
                                onSubmit={handleSubmit}
                                type="submit" formTarget="_top" name="submit" className="reg_submit-two"
                                value="Регистрация"/>

                            <a className="reg_line_subm_right" href="https://excoin.in/login/">Авторизация</a>
                        </div>
                    </form>
                </div>
                {isLoading && <div>Loading...</div>}
                <Verify/>
            </Header>
        </>
    )
};


export default Registration;

