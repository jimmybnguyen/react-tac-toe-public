'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');
var Components = require('./components.js');

var gameModule = new TicTacToe.TicTacToe();

var Title = React.createClass({
    render: function() {
        return <h1>React Tac Toe</h1>;
    }
});
/*
var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
            //<TicTacToe.currentPlayer />
      )
  }
});*/


var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
      <div>
        Hello, world! I am a InformationBox.
     </div>
    );
  }
});

var Grid = React.createClass({
    handleClick: function(){
        console.log(gameModule.currentPlayer);
    },

    render: function() {
        return(
            <button onClick = {this.handleClick}>Click me!</button>
        )
    }
});

var Scoreboard = React.createClass({
    render: function() {
        
    }
});

var Game = React.createClass({
    render: function() {
        return(
            <div>
                <Title />
                <InformationBox />
                <Grid />
            </div>
        );
    }
});

//ReactDOM.render(<HelloMessage />, document.getElementById('content'));
//ReactDOM.render( React.createElement(InformationBox, null), document.getElementById('content'));
ReactDOM.render(<Game />, document.getElementById('content')
);