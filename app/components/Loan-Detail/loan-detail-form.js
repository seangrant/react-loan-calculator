'use strict';

let React = require('react');

let {Label} = require('react-bootstrap');
let InterestRate = require('./interest-rate');

let UpDown = require('./../Up-Down-Numeric/group-numeric-up-down');

let LoanDetailForm = React.createClass({

	getInitialState: function(){
		return {
			interestRate : 6.00
		}
	},
	rateChanged: function(value){
		this.setState({interestRate: value});
	},
	render: function(){

		return <form>
			<InterestRate value={this.state.interestRate}/>
			<h3>Years</h3>
			</form>
	}
});

module.exports = LoanDetailForm;
