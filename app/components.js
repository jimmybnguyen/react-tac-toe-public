'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');
var Controller = require('./controller.js');
    
var Components = React.createClass({
    render: function() {
        return(
            <div>
                <Title />
                <InformationBox />
                <Grid />
                <ScoreBoard />
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
        <h3>Your turn, !</h3>
    );
  }
});

var Square = React.createClass({

    handleClick: function() {
        this.prop.controller.handleClick(this.props.id);
    },

    render: function() {
      return (
          <button onClick={this.handleClick}>Data here</button>
      );
    } 
});

var Grid = React.createClass({

    render: function() {
        return(
           <table>
                <tr>
                    <td><this.Square id={0} /></td>
                    <td><this.Square id={1} /></td>
                    <td><this.Square id={2} /></td>
                </tr>
                <tr>
                    <td><this.Square id={3} /></td>
                    <td><this.Square id={4} /></td>
                    <td><this.Square id={5} /></td>
                </tr>
                <tr>
                    <td><this.Square id={6} /></td>
                    <td><this.Square id={7} /></td>
                    <td><this.Square id={8} /></td>
                </tr>
            </table>  
        )
    }
});

var ScoreBoard = React.createClass({
    render: function() {
        return(
                <strong>Score:</strong>
        )
    }
});

module.exports.Components = Components;
module.exports.Title = Title;
module.exports.InformationBox = InformationBox;
module.exports.Square = Square;
module.exports.Grid = Grid;
module.exports.ScoreBoard = ScoreBoard;