let React = require('react');
let Router = require('react-router');
let RouteHandler = Router.RouteHandler;
let Header = require('./components/Header/header')

let App = React.createClass({
  render: function () {
    return (
			<div>
				<Header/>
				<div className="container">
					<RouteHandler/>
				</div>
			</div>
        );
    }
});
module.exports = App;
