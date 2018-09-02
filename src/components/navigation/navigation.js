import React from 'react'
import {
	Collapse,
	Container,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.png';

import './style.css'

class Navigation extends React.Component {
	constructor(props) {
		super(props)

		this.toggleBtn = this.toggleBtn.bind(this)
		this.state = { open: false }
	}
	toggleBtn() {
		this.setState({ open: !this.state.open })
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md" fixed="top">
					<Container>
						<NavbarBrand href="/">
							<img src={logo} alt="Salestock logo" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleBtn} />
						<Collapse isOpen={this.state.open} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
                                    Products
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}

export default Navigation
