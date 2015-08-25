'use strict';
let React = require('react');
let Reflux = require('reflux');

let {Table, Well} = require('react-bootstrap');
let LoanDetailStore = require('./../../stores/loan-store');
let Actions = require('./../../stores/actions');
let Calculator = require('./../../services/loan-calculator');

let PaymentBreakdown = React.createClass({
	mixins: [
		Reflux.listenTo(LoanDetailStore, 'onChange')
	],
	componentWillMount: function(){
		Actions.getLoanDetails();
	},
	getInitialState: function(){
		return {
			details: {}
		}
	},
	onChange: function(event, details){
		this.setState({details: details});
	},
	renderTableRow: function(row){
		return <tr key={row.month}>
        <td>{row.month}</td>
				<td>{row.principal}</td>
        <td>{row.payment}</td>
        <td>{row.interest}</td>
        <td>{row.balance}</td>
      </tr>
	},
	render: function(){
		var details = this.state.details;
		if(!details){
			return <div></div>
		}

		let table = Calculator.ammortize(details.interestRate, details.years, details.principal);
		var rows = table.map(this.renderTableRow);
		console.log(table[0]);
		return <div>
			<h1>Payment Breakdown</h1>
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th>Month#</th>
						<th>Opening Balance</th>
						<th>Payment</th>
						<th>Interest</th>
						<th>Closing Balance</th>
					</tr>
				</thead>
				<tbody>
							{rows}
				</tbody>
			</Table>
			</div>
	}
});
module.exports = PaymentBreakdown;
