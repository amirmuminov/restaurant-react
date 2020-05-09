import React, {useEffect, useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {connect} from 'react-redux';
import './modal.css';
import {login} from "../../store/actions/authActions";

function LoginModal(props){

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const onchange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const login = () => {
        props.login(user);
        props.setLoginModalVisibility(false);
    };

    useEffect(() => {
        setUser({
            username: '',
            password: ''
        })
    }, [props.loginModalVisibility]);

    return (
        <Modal
            title="Login"
            visible={props.loginModalVisibility}
            onCancel={() => props.setLoginModalVisibility(false)}
            okText="Login"
            onOk={login}
        >
            <Form
                name="login-form"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input onChange={onchange} value={user.username} name="username"/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={onchange} value={user.password} name="password"/>
                </Form.Item>

            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    login
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal);