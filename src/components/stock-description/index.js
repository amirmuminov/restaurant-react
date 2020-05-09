import React from "react";
import {Descriptions} from "antd";
import './stock-description.css';
import {connect} from "react-redux";
import {calculateBill} from "../../store/actions/orderActions";
import {Col} from "antd";

function StockDescription(props){

    let meals = '';

    for (let i = 0; i < props.meals.length; i++){
        meals += props.meals[i].name;
        if(i !== props.meals.length - 1){
            meals += ', ';
        }
    }

    return(
        <Col span={24}>
            <div className="stock-header">
                <img src={props.imageLink} alt=""/>
            </div>
            <Descriptions bordered title="Stock Title" size={"default"} className="stock" column={1}>
                <Descriptions.Item label="Description">{props.description}</Descriptions.Item>
                <Descriptions.Item label="Start Date">{props.startDate.substr(0, 10)}</Descriptions.Item>
                <Descriptions.Item label="End Date">{props.endDate.substr(0, 10)}</Descriptions.Item>
                <Descriptions.Item label="Meals">{meals}</Descriptions.Item>
            </Descriptions>
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
)(StockDescription);