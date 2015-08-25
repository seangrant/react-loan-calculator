'use strict';

let React = require('react');
let UpDown = require('./up-down-numeric');
let {Label} = require('react-bootstrap');
let Numeric = require('./../../services/numeric');

let GroupNumeric = React.createClass({
	propTypes: {
    onChange: React.PropTypes.func,
		decimal: React.PropTypes.number,
		integer: React.PropTypes.number
  },
	getInitialState: function(){
		return {
			rate: 36.00,
			integer: this.props.integer || 3,
			decimal: this.props.decimal || 2
		}
	},
	change: function(rate){
		if(this.props.onChange){
			this.props.onChange(rate);
		}
	},
	renderUpDown: function(index, value){

		if(value === '.'){
			return <Label key={index}>.</Label>
		}

		let changeHandler = (y) => {
			let rateString = Numeric.pad(this.props.value, this.state.integer, this.state.decimal);
			rateString = rateString.substr(0, index) + y.toString() + rateString.substr(index + 1);
			let newRate = Number(rateString);
			this.change(newRate);
		};

		let num = Number(value);
		return <UpDown key={index} onChange={changeHandler} max={9} min={0} value={num}/>
	},

	render: function(){

		let count = Numeric.pad(this.props.value, this.state.integer, this.state.decimal);
		let func = function(value){
			return this.renderUpDown()
		};
		let rates = [];
		for(let x = 0; x < count.length; x++){
			rates.push(this.renderUpDown(x,count[x]));
		}
		return <div>{rates}</div>
	}

});

module.exports = GroupNumeric;
