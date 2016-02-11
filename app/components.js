'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var title = React.createClass({
    render: function() {
        return(
            
        );
    }
});

var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
      React.createElement('div', {className: "InformationBox"},
        "Hello, world! I am a InformationBox."
      )
    );
  }
});