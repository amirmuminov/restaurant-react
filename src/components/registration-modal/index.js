import React, {useEffect, useState} from 'react';
import {Form, Input, Modal, Select} from 'antd';
import {connect} from 'react-redux';
import '../login-modal/modal.css';
import {getRoles} from "../../store/actions/roleActions";
import {signUp} from "../../store/actions/authActions";

const onMount = props => () => {
    props.getRoles();
};

function RegistrationModal(props){

    const { Option } = Select;

    const {roles} = props.roleReducer;

    const roleList = roles.map(role => <Option key={role.id}>{role.authority}</Option>);

    useEffect(onMount(props), []);

    const [user, setUser] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        age: '',
        baseSalary: '',
        roles: []
    });

    const onchange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const handleRolesChange = (id) => {
        let roles = [];
        for (let i = 0; i < id.length; i++){
            roles.push({id: id[i]});
        }
        setUser({...user, roles: roles});
    };

    const signUp = () => {
        props.signUp(user);
    };

    return (
        <Modal
            title="Login"
            visible={props.registrationModalVisibility}
            onCancel={() => props.setRegistrationModalVisibility(false)}
            okText="Sign up"
            onOk={signUp}
        >
            <Form
                name="registration-form"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input name="username" onChange={onchange}/>
                </Form.Item>

                <Form.Item
                    label="First name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input name="firstName" onChange={onchange}/>
                </Form.Item>

                <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input name="lastName" onChange={onchange}/>
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!' }]}
                >
                    <Input name="age" onChange={onchange}/>
                </Form.Item>

                <Form.Item
                    label="Base salary"
                    name="baseSalary"
                    rules={[{ required: true, message: 'Please input your base salary!' }]}
                >
                    <Input name="baseSalary" onChange={onchange}/>
                </Form.Item>

                <Form.Item
                    label="Roles"
                    name="roles"
                    rules={[{ required: true, message: 'Please input roles!' }]}
                >
                    <Select mode="tags" style={{ width: '100%' }} onChange={handleRolesChange} tokenSeparators={[',']}>
                        {roleList}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password name="password" onChange={onchange}/>
                </Form.Item>

                <Form.Item
                    label="Repeat password"
                    name="repeat"
                    rules={[{ required: true, message: 'Please repeat your password!' }]}
                >
                    <Input.Password name="repeat" onChange={onchange}/>
                </Form.Item>

            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    roleReducer: state.roleReducer,
    authReducer: state.authReducer
});

const mapDispatchToProps = {
    getRoles,
    signUp
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationModal);