import React from "react";
import {BrowserRouter as Link} from "react-router-dom";
import {Row, Col, Button} from "antd";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Row gutter={20}>
                    <Col span={8} className="footer-item">
                        <h3 className="footer-item-header">Restaurant</h3>
                        <p>A restaurant is a business that prepares and serves food and drinks to customers.
                            Meals are generally served and eaten on the premises, but many restaurants also offer take-out and
                            food delivery services.
                        </p>
                    </Col>
                    <Col span={8} className="footer-item">
                        <h3 className="footer-item-header">Quick Links</h3>
                        <ul className="footer-links">
                            <Link to="#"><li>Meals</li></Link>
                            <Link to="#"><li>Staff</li></Link>
                            <Link to="#"><li>Orders</li></Link>
                        </ul>
                    </Col>
                    <Col span={8} className="footer-item">
                        <h3 className="footer-item-header">Contact Us</h3>
                        <textarea className="contact-form" rows={3} placeholder="Message..."/>
                        <Button type={"primary"} className="contact-form-button" size={"large"}>Send</Button>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;