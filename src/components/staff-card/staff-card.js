import React from 'react';
import "./staff-card.css";
import {Button, Card, Col} from "antd";
import {connect} from "react-redux";
import {deleteStaffMember} from "../../store/actions/staffActions";

function StaffCard(props){

    let username = localStorage.getItem("username");

    let roles = '';

    for (let i = 0; i < props.roles.length; i++){
        roles += props.roles[i].authority;
        if(i !== props.roles.length - 1){
            roles += ', ';
        }
    }

    const deleteStaffMember = id => {
        props.deleteStaffMember(id);
    };

    return (
        <Col span={8}>
            <Card title={props.name} style={{ width: 300 }} className="staff-card">
                <span>Age: {props.age}</span><br/>
                <span>Hire date: {props.hireDate.substr(0, 10)}</span><br/>
                <span>Salary: ${props.salary}</span><br/>
                <span>Roles: {roles}</span><br/>
                {props.username !== username && localStorage.getItem("username") !== null && (
                    <Button type="primary" danger className="delete-button" onClick={() => deleteStaffMember(props.id)}>
                        Fire
                    </Button>
                )}
            </Card>
        </Col>
    );
}

const mapStateToProps = state => ({
   staffReducer: state.staffReducer
});

const mapDispatchToProps = {
    deleteStaffMember
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffCard);