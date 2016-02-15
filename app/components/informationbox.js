var React = require('react');

var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
      React.createElement('div', {className: "InformationBox"},
        "I am a InformationBox."
      )
    );
  }
});

module.exports = InformationBox;