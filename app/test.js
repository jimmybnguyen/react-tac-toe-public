'use strict';

var game = require('./game.js');
var test = new game.TicTacToe();
console.log(test.currentPlayer);

/*
        return(
           <table>
                <tr>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[0]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[1]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[2]}</button></td>
                </tr>
                <tr>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[3]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[4]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[5]}</button></td>
                </tr>
                <tr>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[6]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[7]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[8]}</button></td>
                </tr>
            </table>  
        )
*/


/*
var Container = React.createClass({
    render: function() {
        return(
            <Component id={1} />
            <Component id={2} />
            <Component id={3} />
        )
    }

});
*/
//making a grid with square component 


/*
var Grid = React.createClass({
                             
    handleClick: function() {
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


---------------------------------------------view--------------------
/*
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');
var Controller = require('./controller.js');


var Title = React.createClass({
    render: function() {
        return <h1>React Tac Toe</h1>
    }
});

var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
      <div>
        <h3>Your turn, {TicTacToe.currentPlayer}!</h3>
     </div>
    );
  }
});

var Square = React.createClass({
    constructor(id) {
        var my_id = id;   
    },

    handleClick: function() {
        //Controller.handleClick({this.props.my_id});
    },

    render: function() {
      return (
          <button onClick={this.handleClick}>{TicTacToe.getMove()}</button>
      );
    } 
});

var Grid = React.createClass({

    render: function() {
        return(
           <table>
                <tr>
                    <td><Square id={0} /></td>
                    <td><Square id={1} /></td>
                    <td><Square id={2} /></td>
                </tr>
                <tr>
                    <td><Square id={3} /></td>
                    <td><Square id={4} /></td>
                    <td><Square id={5} /></td>
                </tr>
                <tr>
                    <td><Square id={6} /></td>
                    <td><Square id={7} /></td>
                    <td><Square id={8} /></td>
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

module.exports.Title = Title;
module.exports.InformationBox = InformationBox;
module.exports.Square = Square;
module.exports.Grid = Grid;
module.exports.ScoreBoard = ScoreBoard;




*/
