'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello World</h1>;
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

//ReactDOM.render(<HelloMessage />, document.getElementById('content'));
ReactDOM.render( React.createElement(InformationBox, null), document.getElementById('content'));