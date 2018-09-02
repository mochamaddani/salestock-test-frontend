import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import Items from '../../components/product/Items';
import Placeholder from '../../components/product/placeholder'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    image: 'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/4147634746eb0e8c42ebfebca41d9049.jpg',
                    slug: 'swernia-flower-a-line-big-mini-dress',
                    name: 'Swernia Flower A-Line Big Mini Dress',
                    price: 169000,
                    colors: ['Tosca', 'Merah', 'Maroon'],
                    category: 'dress',
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
                },
            ]
        }
    }

    _renderLists(){
        if (this.state.isLoading) {
            const loadingList = []
            for (let j=0;j<3;j++) {
                loadingList.push(<Placeholder key={j} />)
            }
            return loadingList
            
        }
        const itemList = this.state.products.map((item, i) => {
            return(
                <Items {...item} key={i} />
            );
        })
        return itemList;
    }

    render(){
        return(
            <Container>
                <Row>
                    {this._renderLists()}
                </Row>
            </Container>
        );
    }
}