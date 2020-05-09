import React, {useEffect, useState} from 'react';
import './header.css';
import LoginModal from "../login-modal";
import RegistrationModal from "../registration-modal";
import HeaderMenu from "../header-menu";
import {connect} from 'react-redux';
import {logout} from "../../store/actions/authActions";

function Header(props){

    const [loginModalVisibility, setLoginModalVisibility] = useState(false);
    const [registrationModalVisibility, setRegistrationModalVisibility] = useState(false);

    useEffect(() => {
        if(props.authReducer.isSignUpSuccess){
            setRegistrationModalVisibility(false);
            setLoginModalVisibility(true);
        }
    }, [props.authReducer.isSignUpSuccess]);

    const userLoggedOut = (
        <ul className="upper-nav-list">
            <li onClick={() => setLoginModalVisibility(true)}>Login</li>
            <li onClick={() => setRegistrationModalVisibility(true)}>Sign up</li>
        </ul>
    );

    const userLoggedIn = (
        <ul className="upper-nav-list">
            <li>Hello, {localStorage.getItem("username")}</li>
            <li onClick={props.logout}>Logout</li>
        </ul>
    );

    return (
        <header className="header">
            <div className="upper-nav">
                <div className="container">
                    {props.authReducer.isAuth ? userLoggedIn : userLoggedOut}
                </div>
            </div>
            <div className="logo">
                <img src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/restaurant-logos-lp/Bubble-Tea-Logo-Maker-with-Lucky-Cat-Drawing.png" alt="Logo"/>
            </div>
            <HeaderMenu/>
            <LoginModal loginModalVisibility={loginModalVisibility} setLoginModalVisibility={setLoginModalVisibility}/>
            <RegistrationModal registrationModalVisibility={registrationModalVisibility} setRegistrationModalVisibility={setRegistrationModalVisibility}/>
        </header>
    );
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

const mapDispatchToProps = {
    logout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);