'use strict';

let React = require('react');

let {Input, Button, ButtonGroup} = require('react-bootstrap');
let UpDown = require('./../Up-Down-Numeric/up-down-numeric');
let LoanDetailForm = React.createClass({

	getInitialState: function(){
		return {
			interestRate : 6.00
		}
	},
 	interestRateChanged: function(value){
		console.log(value);
		this.setState({interestRate: value});
	},

	render: function(){

		return <form>
			<UpDown onChange={this.interestRateChanged} max={99} min={0} value={this.state.interestRate}/>
			</form>
	}
});

module.exports = LoanDetailForm;
