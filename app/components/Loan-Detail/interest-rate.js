'use strict';

let React = require('react');
let UpDown = require('./../Up-Down-Numeric/group-numeric-up-down');

let InterestRate = React.createClass({
	propTypes: {
    onChange: React.PropTypes.func,
		rate: React.PropTypes.number
  },
	getInitialState: function(){
		return {
			interestRate : 6.00
		}
	},
	rateChanged: function(value){
		this.setState({interestRate: value})
	},
	render: function(){
		return <div>
			<h3>Interest Rate ({this.state.value}%)</h3>
			<UpDown value={this.props.value} onChange={this.rateChanged} decimal={2} integer={2} />

			</div>
	}

});

module.exports = InterestRate;
