import React from "react";
import Banner from './Banner';
import Info from './Info';
import Products from './Products';
import Footer from './Footer';
import Navbar from "./Navbar";

const Main = () =>{
    return (
        <div className="main-content">
            <Navbar />
            <Banner />
            <Info />
            <Products /> 
            <Footer />
        </div>
    )
}

export default Main;