import React, {useEffect} from "react";
import {Row} from "antd";
import "./meal-cards.css";
import MealCard from "../meal-card";
import {connect} from "react-redux";
import {getMeals} from "../../store/actions/mealActions";

const onMount = (props) => () => {
    props.getMeals();
};


function MealCards(props){

    useEffect(onMount(props), []);

    const {meals} = props.mealReducer;

    const mealList = meals.map(meal => (
        <MealCard span={8} name={meal.name} price={"$" + meal.price} link={meal.imageLink} categoryName={meal.mealCategory.name}/>
    ));

    return(
        <div className="container">
            <Row gutter={20} className="meal-cards">
                {mealList}
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    mealReducer: state.mealReducer
});

const mapDispatchToProps = {
    getMeals
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MealCards);