import React from "react";
import {Card, Col} from "antd";
import './meal-card.css';

function MealCard(props){

    const { Meta } = Card;

    return(
      <Col span={props.span}>
          <Card
              className="meal-card"
              hoverable
              cover={<img alt="example" src={props.link} />}
          >
              <Meta title={props.name} description={props.price} />
              <span className="meal-category">Category: {props.categoryName}</span>
          </Card>
      </Col>
    );
}

export default MealCard;