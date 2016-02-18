'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

/**
* Represents all of the components in a game
*/ 
var Game = React.createClass({
    render: function() {
        return(
            <div>
                <Title gameModel={this.props.model} />
                <InformationBox gameModel={this.props.model} />
                <Grid gameModel={this.props.model} ctrl={this.props.controller} />
                <ScoreBoard gameModel={this.props.model} />
                <ResetButton gameModel={this.props.model} ctrl={this.props.controller} />
            </div>
        )
    }
});

/**
* The title of the game
*/ 
var Title = React.createClass({
    render: function() {
        return <h1>React Tac Toe</h1>
    }
});

/**
* Displays the current player or game result
*/ 
var InformationBox = React.createClass({displayName: 'InformationBox',
  render: function() {
    return (
        <h3>{this.props.gameModel.displayInfo()}</h3>
    );
  }
});

/**
* Represents part of the grid in the game
*/ 
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

/**
* Represents the tic-tac-toe grid
*/ 
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

/**
* Displays the current score of the players
*/ 
var ScoreBoard = React.createClass({
    render: function() {
        return(
                <div>
                    <strong>Score</strong> X: {this.props.gameModel.xWins} Y: {this.props.gameModel.yWins} Ties: {this.props.gameModel.ties}
                </div>
        )
    }
});

/**
* Starts the game over
*/ 
var ResetButton = React.createClass({
    
    handleClick: function() {
        {this.props.gameModel.resetBoard()};
        {this.props.ctrl.render()};
    },
    
    render: function() {
        return(
            <div>
                <button onClick={this.handleClick}>Reset </button>
            </div>
        )
    }
});

module.exports.Game = Game;