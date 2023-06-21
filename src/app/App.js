import React from 'react';
import Header from "../components/Header/Header";
import AllJs from "../import/AllJs";
import {Route, Routes} from "react-router-dom";
import Reviews from "../components/Reviews/Reviews"
import Rules from "../components/Rules/Rules"
import Rates from "../components/rates/Rates"
import Support from "../components/ Support/Support";
import Country from "../components/country/country";
import AllСomponents from "../components/allСomponents/allСomponents";
const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<AllJs/>}/>
                <Route path="/reviews" element={<Reviews/>}/>
                <Route path="/rules" element={<Rules/>}/>
                <Route path="/rates" element={<Rates/>}/>
                <Route path="/country" element={<Country/>}/>
                <Route path="/support" element={<Support/>}/>
            </Routes>
            <AllСomponents/>
        </>
    );
};

export default App;