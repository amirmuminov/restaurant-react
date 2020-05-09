import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import StockDescriptions from "../../components/stock-descriptions";

function Stock(){
    return (
        <div>
            <Header/>
            <StockDescriptions/>
            <Footer/>
        </div>
    );
}

export default Stock;