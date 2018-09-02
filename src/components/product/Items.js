import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import './product.css';

import ItemDetailed from './ItemDetailed';

import iconShare from '../../assets/img/icon-share.png'
import iconHeart from '../../assets/img/icon-heart.png'

const propTypes = {
	name: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
    category: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    showDetail: PropTypes.bool,
}

const defaultProps = {
    showDetail: false,
    colors: []
}

class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageNum: 0,
        }

    }

    _renderFooter(){
        return(
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
                    <Button className="btn-red" size="sm" color="danger">
                        Beli
                    </Button>
                </div>
            </div>
        );
    }

    _renderItemDetail(){
        if (this.props.showDetail) {
            return <ItemDetailed sizes={this.props.sizes} colors={this.props.colors} />
        }
        return null
    }

    _renderLists(){
        if (this.state.isLoading) {
            return null
        }
    }

    render(){
        return(
            <Col xs={12} md={{ size: 6, offset: 3 }}>
                <div className="PItem_wrapper">
                    <div className="square">
                        <div className="PItems__image-placeholder">
                        {
                            this.props.showDetail ? 
                                <img
                                    src={this.props.images[this.state.imageNum]}
                                    className="PItem_image"
                                    alt={this.props.name}
                                />
                            :
                            <Link to={`/product/${this.props.slug}`}>
                                {
                                    <img
                                        src={this.props.images[0]}
                                        className="PItem_image"
                                        alt={this.props.name}
                                        
                                    />
                                }
                            </Link>

                        }
                        </div>
                    </div>
                    {
                        this.props.showDetail ?
                        <div className="PItems__imgChooser">
                            {
                                this.props.images.map((img, i) => {
                                    return(
                                        <img
                                            key={i}
                                            src={this.props.images[i]}
                                            className={this.state.imageNum==i ? "PItem__imgChooser__image active" : "PItem__imgChooser__image"}
                                            alt={this.props.name}
                                            onClick={() => this.setState({imageNum: i})}
                                        />
                                    );
                                })
                            }
                            
                        </div>
                        :
                        null
                    }
                    
                    <h3 className="PItems__title">
                        <Link style={{textDecoration: 'none', color: '#000'}} to={`/product/${this.props.slug}`}>{this.props.name}</Link>
                    </h3>
                    <div className="PItems__priceArea">
                        <span className="PItems__price">{this.props.price.toLocaleString('id')}</span>
                        <span className="PItems__sizes">{this.props.sizes.map(e => e.name).join(", ")}</span>
                    </div>
                    <hr />
                    {this._renderItemDetail()}
                    {this._renderFooter()}
                </div>
            </Col>
        );
    }
}

Items.propTypes = propTypes
Items.defaultProps = defaultProps

export default Items;