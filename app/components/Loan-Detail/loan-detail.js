'use strct';

let React = require('react');
let LoanDetailForm = require('./loan-detail-form');

let LoanDetail = React.createClass({
	render: function(){
		return <LoanDetailForm/>
	}
});

module.exports = LoanDetail;
