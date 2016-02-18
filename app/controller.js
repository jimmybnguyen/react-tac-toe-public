'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Components = require('./components.js');

var Game = Components.Game //module.exports.Game in the components.js file

class Controller {
    constructor(model) {
        this._gameModel = model;
    }

    handleClick(clickedId) {
        this._gameModel.move(clickedId);
        this.render();
    }
    
    render() {
        ReactDOM.render(<Game model={this._gameModel} controller={this}/>, document.getElementById('content'));  
    }
}
                        
module.exports.Controller = Controller;