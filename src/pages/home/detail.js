import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import Items from '../../components/product/Items';

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    <Items {...this.state.products} showDetail />
                </Row>
            </Container>
        );
    }
}