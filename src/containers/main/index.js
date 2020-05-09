import React from 'react';
import 'antd/dist/antd.css';
import Header from "../../components/header";
import MealCards from "../../components/meal-cards";
import Footer from "../../components/footer";

function Main(){
    return (
        <div>
            <Header/>
            <MealCards/>
            <Footer/>
        </div>
    );
}

export default Main;