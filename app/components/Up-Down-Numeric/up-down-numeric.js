'use strict';

let React = require('react');
let {Input, Button, ButtonGroup} = require('react-bootstrap');

let UpDown = React.createClass({

	change: function(value){
		if(this.props.onChange){
			this.props.onChange(value);
		}
	},
	valueUp: function(){
		let rate = this.state.value;
		rate += 1;
		var max = this.props.max;
		if(rate <= max ){
			this.change(rate);
			this.setState({value: rate});
		}

	},
	getInitialState: function(){
		return {
			value: this.props.value || 0,
			min: this.props.min,
			max: this.props.max
		}
	},
	componentWillReceiveProps : function(newProps){
		console.log('componentWillReceiveProps');
		console.log(newProps);
	},
	valueDown: function(){
		let rate = this.state.value;
		rate -= 1;
		var min = this.props.min;
		if(rate >= min ){
			this.change(rate);
			this.setState({value: rate});
		}


	},
	render: function(){
		return <ButtonGroup vertical>
				<Button onClick={this.valueUp}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></Button>
    		<Button value={this.state.interestRate}>{this.props.value}</Button>
				<Button onClick={this.valueDown}><span className="glyphicon glyphicon-minus" aria-hidden="true"></span></Button>
			</ButtonGroup>
	}
});

module.exports = UpDown;
