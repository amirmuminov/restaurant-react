import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import StaffCards from "../../components/staff-cards";

function Staff(){
    return (
        <div>
            <Header/>
            <StaffCards />
            <Footer/>
        </div>
    );
}

export default Staff;