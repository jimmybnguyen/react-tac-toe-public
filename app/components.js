'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');

var Title = React.createClass({
    render: function() {
        return(<h1>React Tac Toe</h1>);
    }
});


var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
      React.createElement('div', {className: "InformationBox"},
        "I am a InformationBox."
      )
    );
  }
});

var Square = React.createClass({
    handleClick: function(){

    },

    render: function() {
        <button onClick = {handleClick}>Click me!</button>
    }
});

var ScoreBoard = React.createClass({
    render: function() {
        
    }
});

var Board = React.createClass({
    getInitialState: function() {
        return {
            board: this.makeBoard(),
            turn: "X",
            rows: 3
        }
    },
    
    getDefaultProps: function() {
        return {
            rows: 3   
        }
    },
    
    makeBoard: function() {
        var gameBoard = [];
        for (var i = 0; i < this.props.rows; i++) {
            row = [];
            for (var j = 0; j < this.props.rows; j++) {
                row.push(" ");   
            }
            board.push(row);
        }
        return gameBoard;
    },
    
    render: function() {
        
    }

});

module.exports;
/*
module.exports = InformationBox;
module.exports = Square;
module.exports = ScoreBoard;
module.exports = Board;*/