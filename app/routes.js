'use strict';

let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;
let RouteNotFound = Router.RouteNotFound;

let Home = require('./app-component');

let routes = (
    <Route name="app" path="/" handler={Home}>

    </Route>
);

module.exports = routes;
