import React, {useEffect, useState} from 'react';
import {Form, Modal, Select} from 'antd';
import {connect} from 'react-redux';
import '../login-modal/modal.css';
import {getMeals} from "../../store/actions/mealActions";
import {addOrder} from "../../store/actions/orderActions";

const onMount = props => () => {
    props.getMeals();
};

function OrderAddModal(props){

    useEffect(onMount(props), []);

    const {meals} = props.mealReducer;

    const { Option } = Select;

    const mealList = meals.map(meal => <Option key={meal.id}>{meal.name}</Option>);

    const [order, setOrder] = useState({
        meals: [],
        pickerId: null
    });

    const addMeal = (id) => {
        let meals = [];
        for (let i = 0; i < id.length; i++){
            meals.push({id: id[i]});
        }
        setOrder({...order, meals: meals});
    };

    const addOrder = () => {
        props.addOrder(order);
    };

    useEffect(() => {
        setOrder({
            meals: [],
            pickerId: null
        })
    }, [props.loginModalVisibility]);

    return (
        <Modal
            title="New Order"
            visible={props.orderAddModalVisibility}
            onCancel={() => props.setOrderAddModalVisibility(false)}
            okText="Add"
            onOk={addOrder}
        >
            <Form
                name="login-form"
            >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    onChange={addMeal}
                    values={order.meals}
                >
                    {mealList}
                </Select>

            </Form>
        </Modal>
    );
}

const mapStateToProps = state => ({
    mealReducer: state.mealReducer
});

const mapDispatchToProps = {
    getMeals,
    addOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderAddModal);