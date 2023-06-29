import React from "react";
import "./reviews.css";
import Home from "../home/home";
import Header from "../Header/Header";

const Reviews = () => {
  return (
    <div className="reivews">
      <Header>
        <div className="homeobmentable">
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
        </div>
      </Header>
    </div>
  );
};

export default Reviews;
