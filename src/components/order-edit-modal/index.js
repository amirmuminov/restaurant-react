import React, {useEffect, useState} from 'react';
import {Form, Modal, Select} from 'antd';
import {connect} from 'react-redux';
import '../login-modal/modal.css';
import {getMeals} from "../../store/actions/mealActions";
import {editOrder} from "../../store/actions/orderActions";

const onMount = props => () => {
    props.getMeals();
};

function OrderEditModal(props){

    const { Option } = Select;

    useEffect(onMount(props), []);

    const {meals} = props.mealReducer;

    const mealList = meals.map(meal => <Option key={meal.id}>{meal.name}</Option>);

    const [mealId, setMealId] = useState(null);

    const onChange = (id) => {
        setMealId(id);
    };

    const editOrder = () => {
        props.editOrder(props.orderId, mealId);
    };

    return (
        <Modal
            title="Edit Order"
            visible={props.orderEditModalVisibility}
            onCancel={() => props.setOrderEditModalVisibility(false)}
            okText="Edit"
            onOk={editOrder}
        >
            <Form
                name="login-form"
            >
                <Select
                    showSearch
                    className="select"
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
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
    editOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderEditModal);