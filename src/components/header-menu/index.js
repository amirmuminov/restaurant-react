import React from "react";
import {Link} from "react-router-dom";
import {Menu} from "antd";


function HeaderMenu(){

    const adminMenu = (
        <Menu mode="horizontal">
            <Menu.Item key="meals">
                <Link to="/">Meals</Link>
            </Menu.Item>
            <Menu.Item key="staff">
                <Link to="/staff">Staff</Link>
            </Menu.Item>
            <Menu.Item key="orders">
                <Link to="/orders">Orders</Link>
            </Menu.Item>
            <Menu.Item key="stocks">
                <Link to="/stocks">Stocks</Link>
            </Menu.Item>
        </Menu>
    );

    const waiterMenu = (
        <Menu mode="horizontal">
            <Menu.Item key="meals">
                <Link to="/">Meals</Link>
            </Menu.Item>
            <Menu.Item key="orders">
                <Link to="/orders">Orders</Link>
            </Menu.Item>
        </Menu>
    );

    return(
        <div className="nav">
            {adminMenu}
        </div>
    );
}

export default HeaderMenu;