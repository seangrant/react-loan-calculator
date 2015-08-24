'use strict';

let React = require('react');
let {Nav, Navbar, NavItem} = require('react-bootstrap');
let Router = require('react-router');
let Link = Router.Link;
let {NavItemLink} = require('react-router-bootstrap');

let Header = React.createClass({
   render: function(){
       return (
				<Navbar brand={<a href="#">Loan Calc</a>}>
					<Nav>
						<NavItemLink eventKey={1} to="loanDetail">Loan Detail</NavItemLink>
						<NavItemLink eventKey={2} to="paymentBreakdown">Payment Breakdown</NavItemLink>
					</Nav>
				</Navbar>
		)
	 }
});

module.exports = Header;
