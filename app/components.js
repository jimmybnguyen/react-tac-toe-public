'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');

var gameModule = new TicTacToe.TicTacToe();
var currentPlayer = gameModule.currentPlayer;
var score = "Score: X: " + gameModule.xWins + ", O: " + gameModule.yWins + ", Ties: " + gameModule.ties;

var Title = React.createClass({
    render: function() {
        return(<h1>React Tac Toe</h1>);
    }
});


var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
      <div>
        Your turn, {currentPlayer}!
     </div>
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

var Grid = React.createClass({
    handleClick: function(){
        console.log(gameModule.currentPlayer); // test code
        gameModule.increaseScore("X");
        console.log(gameModule.xWins);
    },

    render: function() {
        return(
            <button onClick = {this.handleClick}>Click me!</button>
        )
    }
});
        
var ScoreBoard = React.createClass({
    render: function() {
        return(
            <div>
                {score}
            </div>
        )
    }
});

/*
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
*/

module.exports.Title = Title;
module.exports.InformationBox = InformationBox;
module.exports.Square = Square;
module.exports.Grid = Grid;
module.exports.ScoreBoard = ScoreBoard;