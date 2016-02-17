'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Components = require('./components.js');
var TicTacToe = require('./game.js');
var Controller = require('./controller.js');

var gameModel = new TicTacToe.TicTacToe(); 
var gameView = new Components.Components(); 
var gameController = new Controller.Controller(gameModel, gameView); 

gameController.render();