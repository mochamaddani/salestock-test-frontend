import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';

import './product.css';

import iconShare from '../../assets/img/icon-share.png'
import iconHeart from '../../assets/img/icon-heart.png'

import PropTypes from 'prop-types';

const propTypes = {
    showDetail: PropTypes.bool,
}

const defaultProps = {
    showDetail: false,
}

class Placeholder extends Component {

    _renderPlaceholder(){
        if (!this.props.showDetail) {
            return (
                <Col xs={12} md={{ size: 6, offset: 3 }}>
                    <div className="PItem_wrapper">
                        <div className="square">
                            <div className="PItems__image-placeholder" />
                        </div>
                        <h3 className="PItems__title">
                            <span className="placeholder md" />
                        </h3>
                        <div className="PItems__priceArea">
                            <span className="placeholder md" />
                        </div>
                        <hr />
                        <div className="PItems__footer">
                            <div className="PItems__footer-share">
                                <img src={iconHeart} alt="Like" />
                                <span>Suka</span>
                            </div>
                            <div className="PItems__footer-share">
                                <img src={iconShare} alt="Share" />
                                <span>Bagikan</span>
                            </div>
                            <div className="PItems__footer-buttonArea">
                                <Button size="sm" disabled>
                                    Beli
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                </Col>
            );
        }
        return (
            <Col xs={12} md={{ size: 6, offset: 3 }}>
                <div className="PItem_wrapper">
                    <div className="square">
                        <div className="PItems__image-placeholder" />
                    </div>
                    <h3 className="PItems__title">
                        <span className="placeholder md" />
                    </h3>
                    <div className="PItems__priceArea">
                        <span className="placeholder md" />
                    </div>
                    <hr />
                    <p>
					    <span className="placeholder md" />
                    </p>
                    <hr />
                    <p>
                        <span className="placeholder" />
                    </p>
                    <p>
                        <span className="placeholder" />
                    </p>
                    <p>
                        <span className="-placeholder md" />
                    </p>
                    <p>
                        <span className="placeholder" />
                    </p>
                    <p>
                        <span className="placeholder" />
                    </p>
                    <p>
                        <span className="placeholder md" />
                    </p>
                    <hr />
                    <div className="PItems__footer">
                        <div className="PItems__footer-share">
                            <img src={iconHeart} alt="Like" />
                            <span>Suka</span>
                        </div>
                        <div className="PItems__footer-share">
                            <img src={iconShare} alt="Share" />
                            <span>Bagikan</span>
                        </div>
                        <div className="PItems__footer-buttonArea">
                            <Button size="sm" disabled>
                                Beli
                            </Button>
                        </div>
                    </div>
                </div>
                
            </Col>
        );
    }

    render(){
        return this._renderPlaceholder();
    }
}

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;


export default Placeholder;