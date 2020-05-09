import React, {useState} from "react";
import {Button, Card, Col} from "antd";
import './order-card.css';
import {connect} from "react-redux";
import {calculateBill} from "../../store/actions/orderActions";
import OrderEditModal from "../order-edit-modal";

function OrderCard(props){

    const [orderEditModalVisibility, setOrderEditModalVisibility] = useState(false);

    const id = "ID: " + props.id;

    let meals = '';

    for (let i = 0; i < props.meals.length; i++){
        meals += props.meals[i].name;
        if(i !== props.meals.length - 1){
            meals += ', ';
        }
    }

    const calculateBill = id => {
        props.calculateBill(id);
    };

    return(
        <Col span={8}>
            <Card style={{ width: 300 }} title={id} className="staff-card">
                <span>Date: {props.date}</span><br/>
                <span>Picker: {props.pickerName}</span><br/>
                <span>Status: {props.status}</span><br/>
                <span>Meals: {meals}</span><br/>
                <span>Bill: 2000</span><br/>
                {props.status === 'NOT_PAYED' && (
                        <div>
                            <Button type={"primary"} className="delete-button" style={{marginRight: 5}} onClick={() => calculateBill(props.id)}>Close</Button>
                            <Button type={"primary"} className="delete-button" onClick={() => setOrderEditModalVisibility(true)}>Edit</Button>
                        </div>
                    )
                }
            </Card>
            <OrderEditModal orderEditModalVisibility={orderEditModalVisibility} setOrderEditModalVisibility={setOrderEditModalVisibility} orderId={props.id}/>
        </Col>
    );
}

const mapStateToProps = state => ({
   orderReducer: state.orderReducer
});

const mapDispatchToProps = {
    calculateBill
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderCard);