import React from 'react';
import {Route, Routes} from "react-router-dom";
import Reviews from "../components/Reviews/Reviews"
import Rules from "../components/Rules/Rules"
import Rates from "../components/Rates/Rates"
import Support from "../components/ Support/Support";
import Country from "../components/Country/Country";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Registration from "../components/Registration/Registration";
import ToComeIn from "../components/ToComeIn/ToComeIn";

const App = () => {
    return (
        <>
<<<<<<< HEAD
    
=======
>>>>>>> dcc8866c3dac68412661c5e30cd5d4061cd56c31
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