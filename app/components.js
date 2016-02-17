'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');
var Controller = require('./controller.js');

var Game = React.createClass({
    render: function() {
        return(
            <div>
                <Title />
                <InformationBox gameModel={this.props.model}/>
                <Grid gameModel={this.props.model} ctrl={this.props.controller}/>
                <ScoreBoard gameModel={this.props.model}/>
            </div>
        )
    }
});

var Title = React.createClass({
    render: function() {
        return <h1>React Tac Toe</h1>
    }
});

var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
        <h3>Your turn, {this.props.gameModel.currentPlayer}!</h3>
    );
  }
});

var Square = React.createClass({

    handleClick: function() {
        {this.props.gameCtrl.handleClick(this.props.id)};
    },

    render: function() {
      return (
          <button onClick={this.handleClick}>{this.props.model.gameBoard[this.props.id]}</button>
      );
    } 
});

var Grid = React.createClass({

    render: function() {
        return(
           <table>
                <tr>
                    <td><Square id={0} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                    <td><Square id={1} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                    <td><Square id={2} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                </tr>
                <tr>
                    <td><Square id={3} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                    <td><Square id={4} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                    <td><Square id={5} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                </tr>
                <tr>
                    <td><Square id={6} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                    <td><Square id={7} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                    <td><Square id={8} gameCtrl={this.props.ctrl} model={this.props.gameModel} /></td>
                </tr>
            </table>  
        )
    }
});

var ScoreBoard = React.createClass({
    render: function() {
        return(
                <div>
                    <strong>Score</strong> X: {this.props.gameModel.xWins} Y: {this.props.gameModel.yWins} Ties: {this.props.gameModel.ties}
                </div>
        )
    }
});

module.exports.Game = Game;
module.exports.Title = Title;
module.exports.InformationBox = InformationBox;
module.exports.Square = Square;
module.exports.Grid = Grid;
module.exports.ScoreBoard = ScoreBoard;