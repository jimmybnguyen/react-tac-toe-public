'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');
var Components = require('./components.js');

class Controller {
    constructor(model, view) {
        this._gameModel = model;
        this._gameView = view;
    }
    
    handleClick(clickedId) {
        this._gameModel.move(clickedId);
        ReactDOM.render(<this._gameView model={this._gameModel} />, document.getElementById('content')); 
    }
    
    render() {
        ReactDOM.render(<this._gameView model={this._gameModel} />, document.getElementById('content'));  
    }
}
                        
module.exports.Controller = Controller;