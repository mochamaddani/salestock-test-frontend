import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../../App.css';

import Items from '../../components/product/Items';
import Placeholder from '../../components/product/placeholder'
import Products from '../../db/index';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            isLoading: true,
            page: 1,
            perPage: 2,
            stopPaging: false,
        }
    }

    async _GetProducts(page, perPage){
        this.setState({ isLoading: true });
        const resp = await Products.All(page, perPage);

        setTimeout(() => {
            if (!resp.data.error) {
                if (resp.data.data=='' || resp.data.data==null) {
                    this.setState({ stopPaging: true });
                }
                this.setState({products: this.state.products.concat(resp.data.data)})
            }
            this.setState({ isLoading: false });
        }, 2000)
        
    }

    _renderLists(){
        if (this.state.isLoading && this.state.page==1) {
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

    _InitScrollHandler(){
        window.onscroll = async () => {
            const scrollTop = document.documentElement.scrollTop;
            const innerHeight = window.innerHeight;
            const offsetHeight = document.documentElement.offsetHeight
			const bottomOfWindow = scrollTop + innerHeight === offsetHeight
			if (bottomOfWindow) {
                if (!this.state.stopPaging) {
                    const next = this.state.page + 1;
                    await this._GetProducts(next);
                    this.setState({page: next});
                }
                
			}
		}
    }

    componentDidMount(){
        this._InitScrollHandler()
        this._GetProducts(this.state.page, this.state.perPage);
    }

    render(){
        return(
            <Container>
                <Row>
                    {this._renderLists()}
                </Row>
                {
                    this.state.isLoading ? 
                    <div style={{width: '100%', height: '1.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div class="lds-default">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    :
                    null
                }
                
            </Container>
        );
    }
}