import React from 'react';
import './support.css'
import Header from "../Header/Header";

const Support = () => {
    return (
        <>
            <Header>
                <div className="homeobmentable-support">
                    <h1 className="title_page">Контакты</h1>
                    <div className="text-p">
                        <p>Мы всегда готовы ответить на интересующие Вас вопросы, а также выслушать Ваши предложения по
                            улучшению нашего сервиса.</p>
                        <p>Используйте данную форму, если хотите задать нам вопрос, или сообщить о ошибке. Пожалуйста,
                            делайте Ваше сообщение как можно более развернутым, тогда мы сможем решить проблему намного
                            быстрее.</p>
                    </div>
                    <div>
                        <div>
                            <div className="form_field_label cf_label">
                                <label htmlFor="form_field_id-1-name"><span
                                    className="form_field_label_ins">Ваше имя <span
                                    className="req">*</span>:</span></label>
                            </div>
                            <div className="form_field_ins cf_line_ins">
                                <input type="text" id="form_field_id-1-name" className="cf_input notclear"
                                       placeholder=""
                                       name="name" value=""/>
                                <div className="form_field_errors">
                                    <div className="form_field_errors_ins"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form_field_label cf_label">
                                <label htmlFor="form_field_id-1-name"><span
                                    className="form_field_label_ins">Ваш e-mail<span
                                    className="req">*</span>:</span></label>
                            </div>
                            <div className="form_field_ins cf_line_ins">
                                <input type="text" id="form_field_id-1-name" className="cf_input notclear"
                                       placeholder=""
                                       name="name" value=""/>
                                <div className="form_field_errors">
                                    <div className="form_field_errors_ins"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form_field_label cf_label">
                                <label htmlFor="form_field_id-1-name"><span
                                    className="form_field_label_ins">ID обмена:</span></label>
                            </div>
                            <div className="form_field_ins cf_line_ins">
                                <input type="text" id="form_field_id-1-name" className="cf_input notclear"
                                       placeholder=""
                                       name="name" value=""/>
                                <div className="form_field_errors">
                                    <div className="form_field_errors_ins"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form_field_label cf_label">
                                <label htmlFor="form_field_id-1-name"><span
                                    className="form_field_label_ins">Сообщение<span
                                    className="req">*</span>:</span></label>
                            </div>
                            <div className="form_field_ins cf_line_ins">

                            <textarea id="form_field_id-1-text" className="cf_textarea " placeholder="" name="text"
                                      style={{width: "790px", height: "197px"}}></textarea>

                            </div>
                        </div>
                        <div className="cf_line has_submit">
                            <input type="submit" formTarget="_top" name="submit" className="cf_submit"
                                   value="Отправить сообщение"/>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default Support;