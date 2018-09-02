import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import Items from '../../components/product/Items';

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: {
                image: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/4147634746eb0e8c42ebfebca41d9049.jpg',
                slug: 'swernia-flower-a-line-big-mini-dress',
                name: 'Swernia Flower A-Line Big Mini Dress',
                price: 169000,
                category: 'dress',
                colors: ['Tosca', 'Merah', 'Maroon'],
                sizes: [
                    {
                        name: "S",
                        lingkarDada: 90,
                        panjangLengan: 11,
                        panjang: 90,
                        lingkarPinggang: 94
                    },
                    {
                        name: "M",
                        lingkarDada: 94,
                        panjangLengan: 12,
                        panjang: 90,
                        lingkarPinggang: 98
                    },
                ]
            }
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