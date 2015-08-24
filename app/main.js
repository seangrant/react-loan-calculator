var React = require('react');
require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.css');
let Router = require('react-router');
let Routes = require('./routes');

Router.run(Routes, function(Handler){
    React.render(<Handler/>, document.body);
});
