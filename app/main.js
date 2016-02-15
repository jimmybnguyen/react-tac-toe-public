'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TicTacToe = require('./game.js');
var Components = require('./components.js');

var gameModule = new TicTacToe.TicTacToe();

var Game = React.createClass({
    render: function() {
        return(
            <div>
                <Components.Title />
                <Components.InformationBox />
                <Components.Grid />
                <Components.ScoreBoard />
            </div>
        );
    }
});

//ReactDOM.render(<HelloMessage />, document.getElementById('content'));
//ReactDOM.render( React.createElement(InformationBox, null), document.getElementById('content'));
ReactDOM.render(<Game />, document.getElementById('content')
);