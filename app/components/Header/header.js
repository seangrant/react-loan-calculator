'use strict';

let React = require('react');
let {Nav, Navbar, NavItem, DropdownButton, MenuItem} = require('react-bootstrap');

let Header = React.createClass({
   render: function(){
       return (
					 <Navbar brand={<a href="#">Loan Calc</a>}>
    <Nav>
      <NavItem eventKey={1} href='#'>Detail</NavItem>
      <NavItem eventKey={2} href='#'>Payment Table</NavItem>

    </Nav>
  </Navbar>
	)
   }
});

module.exports = Header;
