'use strict';

let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;
let RouteNotFound = Router.RouteNotFound;

let Home = require('./app-component');
let LoanDetail = require('./components/Loan-Detail/loan-detail');
let PaymentBreakdown = require('./components/Payment-Breakdown/payment-breakdown');

let routes = (
    <Route name="app" path="/" handler={Home}>
			<Route name="loanDetail" path="/loanDetail/" handler={LoanDetail}/>
			<Route name="paymentBreakdown" path="/paymentBreakdown/" handler={PaymentBreakdown}/>
    </Route>
);

module.exports = routes;
