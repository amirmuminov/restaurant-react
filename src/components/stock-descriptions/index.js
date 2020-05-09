import React, {useEffect} from 'react';
import {Col, Row} from "antd";
import './stock-descriptions.css';
import {connect} from 'react-redux';
import StockDescription from "../stock-description";
import {getStocks} from "../../store/actions/stockActions";

const onMount = props => () => {
    props.getStocks();
};

function StockDescriptions(props) {

    useEffect(onMount(props), []);

    const {stocks} = props.stockReducer;

    const stockList = stocks.map(stock => <StockDescription name={stock.name}
                                                            description={stock.description}
                                                            startDate={stock.beginningDate}
                                                            endDate={stock.endingDate}
                                                            imageLink={stock.imageLink}
                                                            meals={stock.meals}
    />);

    return (
        <div className="stock-descriptions">
            <div className="container">
                <Row gutter={40}>
                    <Col span={24}>
                        <Row gutter={40} className="stocks">
                            {stockList}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    stockReducer: state.stockReducer
});

const mapDispatchToProps = {
    getStocks
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockDescriptions);