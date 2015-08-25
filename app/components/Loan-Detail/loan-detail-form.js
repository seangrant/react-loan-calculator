'use strict';

let React = require('react');

let {Label, Well} = require('react-bootstrap');
let InterestRate = require('./interest-rate');
let Years = require('./years');
let Principal = require('./loan-principal');
let Calculator = require('./../../services/loan-calculator');
let UpDown = require('./../Up-Down-Numeric/group-numeric-up-down');

let LoanDetailForm = React.createClass({

	getInitialState: function(){
		return {
			details: {
				interestRate : 6.00,
				years: 30,
				principal: 450000
			}
		}
	},


	detailsChanged: function(details){
		if(this.props.onChange){
			this.props.onChange(details);
		}
	},
	componentWillReceiveProps(newProps){
		this.setState({details: newProps.details});
	},
	fieldChanged: function(event){

		let field = event.target.name;
		let value = event.target.value;
		this.state.details[field] = value;

		this.detailsChanged(this.state.details);

	},
	render: function(){
		if(!this.props.details || !this.props.details.principal ){
			return <div> </div>
		}
		let details = this.props.details;

    let value = Calculator.monthlyPayment(details.interestRate, details.years, details.principal);
		value = value.payment.toFixed(2);
		return <Well>
			<Principal name="principal" onChange={this.fieldChanged} value={details.principal} />
			<InterestRate name="interestRate" onChange={this.fieldChanged} value={details.interestRate}/>
			<Years name="years" onChange={this.fieldChanged} value={details.years} />
			<h3>Monthly Payment</h3>
			<h2>${value}</h2>
			</Well>
	}
});

module.exports = LoanDetailForm;
