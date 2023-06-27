import React from 'react';
import {Route, Routes} from "react-router-dom";
import Reviews from "../components/Reviews/Reviews"
import Rules from "../components/Rules/Rules"
import Rates from "../components/rates/Rates"
import Support from "../components/ Support/Support";
import Country from "../components/country/country";
import Footer from "../components/Footer/footer";
import Home from "../components/home/home";
import Registration from "../components/ registration/registration";
import ToComeIn from "../components/toComeIn/ToComeIn";

const App = () => {
    return (
        <>
            {/*<Header/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/reviews" element={<Reviews/>}/>
                <Route path="/rules" element={<Rules/>}/>
                <Route path="/rates" element={<Rates/>}/>
                <Route path="/country" element={<Country/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/toComeIn" element={<ToComeIn/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;