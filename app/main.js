'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Components = require('./components.js');
var TicTacToe = require('./game.js');

var gameModule = new TicTacToe.TicTacToe();

var Game = React.createClass({
    
    handleClick: function(){
        ReactDOM.render(<Game />, document.getElementById('content'));
    },
    
    render: function() {
        return(
            <div>
                <Components.Title />
                <Components.InformationBox currentPlayer = {gameModule.currentPlayer}/>
                <Components.Grid gameBoard = {gameModule.gameBoard}/>
                <Components.ScoreBoard xWins = {gameModule.xWins} yWins = {gameModule.yWins} ties = {gameModule.ties} />
                <button onClick = {this.handleClick}>Re-render</button>
            </div>
        );
    }
});

ReactDOM.render(<Game />, document.getElementById('content'));
