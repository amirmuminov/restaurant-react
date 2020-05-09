import React, {useEffect} from 'react';
import {Button, Col, Row} from "antd";
import StaffCard from "../staff-card/staff-card";
import './staff-cards.css';
import {connect} from 'react-redux';
import {getStaff} from "../../store/actions/staffActions";

const onMount = props => () => {
    props.getStaff();
};

function StaffCards(props) {

    useEffect(onMount(props), []);

    const {staff} = props.staffReducer;

    const staffList = staff.map(person => <StaffCard name={`${person.firstName} ${person.lastName}`}
                                                     age={person.age}
                                                     hireDate={person.hireDate}
                                                     salary={person.baseSalary}
                                                     roles={person.roles}
                                                     username={person.username}
                                                     id={person.id}
    />);

    return (
        <div className="staff-cards">
            <div className="container">
                <Row gutter={40}>
                    <Col span={24}>
                        <Row gutter={40}>
                            {staffList.length > 0 ? staffList : <h4>You are not allowed to see staff members!</h4>}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    staffReducer: state.staffReducer
});

const mapDispatchToProps = {
    getStaff
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaffCards);