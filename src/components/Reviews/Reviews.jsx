import React from "react";
import "./reviews.css";
import Home from "../Home/Home";
import Header from "../Header/Header";

const Reviews = () => {
  return (
    <div className="reivews">
      <Header>
        <div className="homeobmentable-revers">
          <div>
            <div className="form_filed_ins">
              <h1 className="otz">Отзывы</h1>
            </div>
            <div className="form_filed_Name">
              <h6>
                Ваше имя <span>*</span>:
              </h6>
              <input type="text" />
            </div>
            <div>
              <div className="form_filed_Name">
                <h6>
                  Ваш e-mail <span>*</span>:
                </h6>
                <input type="text" />
              </div>
              <div>
                <h6 className="form_label">
                  Текст отзыва <span className="">*</span>:
                </h6>
                <textarea id="form_field_id" class="rf_textarea"></textarea>
              </div>
            </div>
            <div className="asrt">
              <input type="submit" value="Оставить отзыв" />
            </div>
          </div>
          <div className="oneotziv">
            <div className="oneotdata_two">
              <p className="oneotdata">15.02.2022, 15:22</p>
              <p className="oneotname">Владимир</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright">Лучший обменник</p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">14.02.2022, 11:24</p>
              <p className="oneotname">Евгений</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Давно меняю на экскоине и ни разу не подводили.
                <br />
                Так держать!
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">11.02.2022, 14:23</p>
              <p className="oneotname">Дима</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Спасибо за обмен и хорошую ставку
                <br />
                Долго ждать подтверждений пришлось а в остальном все супер
                <br />5 баллов
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">08.02.2022, 15:34</p>
              <p className="oneotname">Галина</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Мне все понравилось, надеюсь что бонус пришлете:)
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">01.02.2022, 09:48</p>
              <p className="oneotname">Маша</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                спасибо за хорошую ставку и отдельное спасибо менеджеру
                <br />
                Владимиру за помощь
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">29.01.2022, 18:21</p>
              <p className="oneotname">Григорий</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Отличный обменный пункт, рекомендую к пользованию
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">28.01.2022, 23:56</p>
              <p className="oneotname">Леонид</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Все качественно как всегда!
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">14.01.2022, 22:31</p>
              <p className="oneotname">Семен</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Спасибо Владимиру за помощь. Все четко объясняет
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">12.01.2022, 13:33</p>
              <p className="oneotname">Дарья</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">Лучший курс)))</p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">22.12.2021, 10:24</p>
              <p className="oneotname">Саша</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                С наступающим! Все пришло, спасибо за обмен!
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">22.10.2021, 20:10</p>
              <p className="oneotname">Роман</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Благодарю за отличную ставку и надежность Оператор ваш молодец
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">19.10.2021, 17:29</p>
              <p className="oneotname">Дармен</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Лучий обменик на бесте!!!
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">17.10.2021, 14:15</p>
              <p className="oneotname">Коля</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">Все четко спасибо</p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">15.10.2021, 15:30</p>
              <p className="oneotname">Жанна</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Прекрасный оператор Владимир:) Спасибо за омен
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">12.10.2021, 12:04</p>
              <p className="oneotname">Евгений</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Быстро меняете, все понравилось, может приду еще
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">06.10.2021, 16:33</p>
              <p className="oneotname">Марина</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">Надежный обменник</p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">04.09.2021, 20:58</p>
              <p className="oneotname">Владимир</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Благодарю за отличную ставку. Менял бит/сбер. Средства пришли.
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">04.09.2021, 12:35</p>
              <p className="oneotname">Михаил</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
                Деньги отправили очень быстро!
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">03.09.2021, 20:05</p>
              <p className="oneotname">Ольга</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
              Могу рекомендовать этот обменник. Оператор объяснил все и был <br /> постоянно на связи. Спасибо
              </p>
            </div>
          </div>
          <div className="oneot"></div>
          <div className="oneotziv_two">
            <div className="oneotdata_two">
              <p className="oneotdata">03.09.2021, 08:56</p>
              <p className="oneotname">Давид</p>
            </div>

            <div className="oneotzivright_one">
              <p className="oneotzivright_two-three">
              Спасибо за быстрый обмен!


              </p>
            </div>
          </div>
          <div className="oneot"></div>
  
        </div>
      </Header>
    </div>
  );
};

export default Reviews;
