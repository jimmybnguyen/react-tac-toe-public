'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Components = require('./components.js');
var TicTacToe = require('./game.js');
var Controller = require('./controller.js');

var gameModule = new TicTacToe.TicTacToe();
var gameView = new Components.Components();
var gameController = new Controler.Controller();


/*
var Game = React.createClass({
    
    handleClick: function(){
        ReactDOM.render(<Game />, document.getElementById('content'));
    },
    
    render: function() {
        return(
            <div>
                <Components.Title />
                <Components.InformationBox currentPlayer = {gameModule.currentPlayer}/>
                <Components.Grid gameBoard = {gameModule.gameBoard} currentPlayer = {gameModule.currentPlayer}/>
                <Components.ScoreBoard xWins = {gameModule.xWins} yWins = {gameModule.yWins} ties = {gameModule.ties} />
                <button onClick = {this.handleClick}>Re-render</button>
            </div>
        );
    }
});

ReactDOM.render(<Game />, document.getElementById('content'));
*/