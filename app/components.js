'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');

var Title = React.createClass({
    render: function() {
        return <h1>React Tac Toe</h1>
    }
});

var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
      <div>
        <h3>Your turn, {this.props.currentPlayer}!</h3>
     </div>
    );
  }
});
        
var Square = React.createClass({
    
    handleClick: function() {

    },
    
    render: function() {

      return (
          <div>hi</div>
      );
    } 
});
        
var Grid = React.createClass({
                             
    handleClick: function(index) {
        console.log(index);        
    },
    
    render: function() {
        return(
           <table>
                <tr>
                    <td><button onClick = {this.handleClick(0)}>{this.props.gameBoard[0]}</button></td>
                    <td><button onClick = {this.handleClick(1)}>{this.props.gameBoard[1]}</button></td>
                    <td><button onClick = {this.handleClick(2)}>{this.props.gameBoard[2]}</button></td>
                </tr>
                <tr>
                    <td><button onClick = {this.handleClick(3)}>{this.props.gameBoard[3]}</button></td>
                    <td><button onClick = {this.handleClick(4)}>{this.props.gameBoard[4]}</button></td>
                    <td><button onClick = {this.handleClick(5)}>{this.props.gameBoard[5]}</button></td>
                </tr>
                <tr>
                    <td><button onClick = {this.handleClick(6)}>{this.props.gameBoard[6]}</button></td>
                    <td><button onClick = {this.handleClick(7)}>{this.props.gameBoard[7]}</button></td>
                    <td><button onClick = {this.handleClick(8)}>{this.props.gameBoard[8]}</button></td>
                </tr>
            </table>  
        )
    }
});
        
var ScoreBoard = React.createClass({
    render: function() {
        return(
            <div>
                <strong>Score</strong> X: {this.props.xWins} Y: {this.props.yWins} Ties: {this.props.ties}
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