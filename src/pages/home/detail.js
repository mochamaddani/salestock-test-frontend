import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import Items from '../../components/product/Items';
import Placeholder from '../../components/product/placeholder'
import Products from '../../db/index';

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: {},
            isLoading: true
        }
    }

    async _GetProductBySlug(){
        this.setState({ isLoading: true });
        const slug = this.props.match.params.slug;
        const resp = await Products.GetBySlug(slug);

        setTimeout(() => {
            if (!resp.data.error) {
                this.setState({ products: resp.data.data[0] })
            }
            this.setState({ isLoading: false });
        }, 2000)
        
    }

    _renderDetail(){
        if (this.state.isLoading) {
            return <Placeholder showDetail  />
        }
        const itemList = <Items {...this.state.products} showDetail />
        return itemList;
    }

    componentDidMount(){
        this._GetProductBySlug();
    }

    render(){
        return(
            <Container>
                <Row>
                    {this._renderDetail()}
                </Row>
            </Container>
        );
    }
}