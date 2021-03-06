'use strict';

let React = require('react');

let UpDown = require('./../Up-Down-Numeric/group-numeric-up-down');

let Principal = React.createClass({
	propTypes: {
    onChange: React.PropTypes.func,
		value: React.PropTypes.number
  },
	getInitialState: function(){
		return {
			interestRate : 6.00
		}
	},
	rateChanged: function(value){

		let event = {
			target:{
				name : this.props.name,
				value : value
		 	},
			name: 'change'
		};
		this.props.onChange(event);
		this.setState({interestRate: value})
	},
	render: function(){
		return <div>
			<h3>Principal (${this.props.value})</h3>
			<UpDown value={this.props.value} onChange={this.rateChanged} decimal={0} integer={2} />
			</div>
	}
});

module.exports = Principal;
