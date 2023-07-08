import React, { useEffect, useState } from "react";
import "./reviews.css";
import Home from "../Home/Home";
import Header from "../Header/Header";
import axios from "axios";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://excoin.onrender.com/review/?page=${currentPage}`);
      setData(res.data.results);
      setTotalPages(res.data.total_pages);
    };
    getData();
  }, [currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);

  };

  const goToNextPage = () => {
      setCurrentPage(prevPage => prevPage +1);
  };

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
          {data.map((item) => (
            <div key={item.id}>
              <div className="oneotziv_two">
                <div className="oneotdata_two">
                  <p className="oneotdata">{item.date_created}</p>
                  <p className="oneotname">{item.name}</p>
                </div>

                <div className="oneotzivright_one">
                  <p className="oneotzivright_two-three">{item.text}</p>
                </div>
              </div>
            </div>
          ))}{" "}
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
          <a href="#">{currentPage}</a>
          <button onClick={goToNextPage} disabled={currentPage === 7}>Next</button>
        </div>
      </Header>
    </div>
  );
};

export default Reviews;
