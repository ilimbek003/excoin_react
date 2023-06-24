import React from 'react';
import "./home.css"
import Header from "../Header/Header";
import Country from "../country/country";
const Home = () => {
    return (
        <div id="home">
            <Header>
               <Country/>
            </Header>
        </div>
    );
};

export default Home;