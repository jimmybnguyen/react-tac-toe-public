'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');
var Components = require('./components.js');

//var gameModel = new TicTacToe.TicTacToe(); 
//var gameView = new Components.Components(); 

class Controller {
    constructor(model, view) {
        this._gameModel = model;
        this._gameView = view;
    }
    
    handleClick(clickedId) {
        this._gameModel.move(clickedId);
        ReactDOM.render(<something />, document.getElementById('content')); 
    }
    
    render() {
        ReactDOM.render(<something />, document.getElementById('content'));  
    }
}