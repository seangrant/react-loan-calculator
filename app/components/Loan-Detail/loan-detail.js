'use strct';

let React = require('react');
let Reflux = require('reflux');
let LoanDetailStore = require('./../../stores/loan-store');
let Actions = require('./../../stores/actions');
let LoanDetailForm = require('./loan-detail-form');

let LoanDetail = React.createClass({
	mixins: [
		Reflux.listenTo(LoanDetailStore, 'onChange')
	],
	onChange: function(event, details){
		this.setState({details: details});
	},
	componentWillMount: function(){
		Actions.getLoanDetails();
	},
	getInitialState: function(){
		return {
			details: {}
		}
	},
	handleDetailsChanged: function(details){
		console.log(details);
		LoanDetailStore.updateLoanDetails(details);
	},
	render: function(){
		return <LoanDetailForm onChange={this.handleDetailsChanged} details={this.state.details}/>
	}
});

module.exports = LoanDetail;
