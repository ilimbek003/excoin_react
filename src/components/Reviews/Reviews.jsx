import React, { useEffect, useState } from "react";
import "./reviews.css";
import Home from "../Home/Home";
import Header from "../Header/Header";
import axios from "axios";

const Reviews = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);
  const [dataInput, setDataInput] = useState(
    {
      "name": "",
      "email": "",
      "text": "",
      "date_created": "11.07.2023, 01:45"
    }
  )
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://excoin.onrender.com/review/?page=${currentPage}`
      );
      setData(res.data.results);
      setCount(res.data.count);
      setTotalPages(res.data.total_pages);
    };
    getData();
  }, [currentPage]);

  console.log(count);
  console.log(Math.ceil(count / 20));

  const goToPreviousPage = () => {
    setCurrentPage((totalPages) => totalPages - 1);
  };
  const goToLastPage = () => {
    setCurrentPage(() => Math.ceil(count / 20));
  };
  const goToFirstPage = () => {
    setCurrentPage(() => Math.ceil(1));
  };

  const goToNextPage = () => {
    setCurrentPage((totalPages) => totalPages + 1);
  };

  const handleFormSubmit =  (event) => {
    event.preventDefault();
    axios.post("https://excoin.onrender.com/review/" ,dataInput)
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
  };

  return (
    <div className="reivews">
      <Header>
        <div className="homeobmentable-revers">
        <form onSubmit={handleFormSubmit}>

        <div className="form_filed_Name">
          <h6>
            Ваше имя <span>*</span>:
          </h6>
          <input
            type="text"
            value={dataInput.name}
            onChange={(e) => setDataInput({ ...dataInput, name: e.target.value })}
          />
        </div>
        <div className="form_filed_Name">
          <h6>
            Ваш e-mail <span>*</span>:
          </h6>
          <input
            type="email"
            value={dataInput.email}
            onChange={(e) => setDataInput({ ...dataInput, email: e.target.value })}
          />
        </div>
        <div>
          <h6 className="form_label">
            Текст отзыва <span className="">*</span>:
          </h6>
          <textarea
            id="form_field_id"
            className="rf_textarea"
            value={dataInput.text}
            onChange={(e) => setDataInput({ ...dataInput, text: e.target.value })}
          ></textarea>
        </div>
        <div className="asrt">
          <input type="submit" value="Оставить отзыв" />
        </div>
      </form>
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
          <div className="pogination">
            <button className="one" onClick={goToFirstPage}>
              Первая
            </button>
            <button
              className="preivieus"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <a href="#" className="curentPage" onClick={totalPages}>
              {currentPage}
            </a>
            <button
              className="next"
              onClick={goToNextPage}
              disabled={currentPage === Math.ceil(count / 20)}
            >
              Next
            </button>
            <button className="last" onClick={goToLastPage}>
              Последняя
            </button>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Reviews;



