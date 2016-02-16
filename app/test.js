'use strict';

var game = require('./game.js');
var test = new game.TicTacToe();
console.log(test.currentPlayer);

/*
        return(
           <table>
                <tr>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[0]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[1]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[2]}</button></td>
                </tr>
                <tr>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[3]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[4]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[5]}</button></td>
                </tr>
                <tr>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[6]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[7]}</button></td>
                    <td><button onClick = {this.handleClick}>{gameModule.gameBoard[8]}</button></td>
                </tr>
            </table>  
        )
*/