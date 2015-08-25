'use strict';

let Reflux = require('reflux');
let Actions = require('./actions');
let details = {
	interestRate : 6.0,
	principal: 450000,
	years: 30
}
let LoanStore = Reflux.createStore({
	details: details,
	listenables: [Actions],
	triggerChange: function(details){
		this.trigger('change', details);
	},
	getInitialState: function(){
		return {details};
	},
	getLoanDetails: function(){
		this.triggerChange(details);
	},
	updateLoanDetails: function(update){
		details = update;
		this.triggerChange(update);
	}
});

module.exports = LoanStore;
