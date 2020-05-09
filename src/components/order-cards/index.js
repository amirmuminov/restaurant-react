import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "antd";
import {connect} from "react-redux";
import {getOrders} from "../../store/actions/orderActions";
import OrderCard from "../order-card";
import "./order-cards.css";
import OrderAddModal from "../order-add-modal/order-add-modal";

const onMount = (props) => () => {
    props.getOrders();
};

function OrderCards(props){

    useEffect(onMount(props), []);

    const {orders} = props.orderReducer;

    const [orderAddModalVisibility, setOrderAddModalVisibility] = useState(false);

    const orderList = orders.map(order => <OrderCard id={order.id}
                                                     status={order.status}
                                                     date={order.orderDate}
                                                     pickerName={order.orderPicker.username}
                                                     meals={order.meals}
    />);

    return(
      <div className="container">
          <Row gutter={20} className="order-cards">
              <Col span={18}>
                  <Row gutter={20}>
                      {orderList.length > 0 ? orderList : (<h4>You are not allowed to see orders!</h4>)}
                  </Row>
              </Col>
              <Col span={6}>
                  <Button type={"primary"} className="add-button" onClick={() => setOrderAddModalVisibility(true)}>New Order</Button>
              </Col>
              <OrderAddModal orderAddModalVisibility={orderAddModalVisibility} setOrderAddModalVisibility={setOrderAddModalVisibility}/>
          </Row>
      </div>
    );
}

const mapStateToProps = state => ({
    orderReducer: state.orderReducer
});

const mapDispatchToProps = {
    getOrders
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderCards);