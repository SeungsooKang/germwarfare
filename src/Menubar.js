import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Menubar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	reloadVsPlayer = () => {
		window.location.assign("./#/vsplayer");
		window.location.reload();
	}

	reloadVsComputer = () => {
		window.location.assign("./#/vscomputer");
		window.location.reload();
	}

	render() {
		return (
		<div>
			<Navbar color="light" light expand="md">
			<NavbarBrand href="/germwarfare/">GermWarfare</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
				<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink href="/components/">JohnKang</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/SeungsooKang/germwarfare" target="_blank">GitHub</NavLink>
				</NavItem>
				<UncontrolledDropdown nav inNavbar>
					<DropdownToggle nav caret>
					Options
					</DropdownToggle>
					<DropdownMenu right>
					<DropdownItem onClick={this.reloadVsPlayer}>
						P vs P
					</DropdownItem>
					<DropdownItem onClick={this.reloadVsComputer}>
						P vs C
					</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
				</Nav>
			</Collapse>
			</Navbar>
		</div>
		);
	}
}