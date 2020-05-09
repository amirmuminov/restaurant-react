import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import OrderCards from "../../components/order-cards";

function Order(){
    return (
        <div>
            <Header/>
            <OrderCards/>
            <Footer/>
        </div>
    );
}

export default Order;