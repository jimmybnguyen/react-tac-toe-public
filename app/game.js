'use strict';

class TicTacToe {
    constructor() {
        this._gameBoard = [1,0,0,0,1,0,0,0,1];
        this._currentPlayer = 1;
    }
    
    get gameBoard() {
        return this._gameBoard;   
    }
    
    get currentPlayer() {
        return this._currentPlayer;   
    }

    reset() {
        this.gameBoard = [];
    }
    
    currentPlayer() {
        if (this._currentPlayer == 1) {
            this._currentPlayer = 2;   
        } else {
            this._currentPlayer = 1;   
        }
    }
    
    move() {
        
    }
    
    gameWon() {
        if (this._gameBoard[0] == '1' &&
            this._gameBoard[1] == '1' &&
            this._gameBoard[2] == '1') {
            console.log('won 1st row 1');   
        } else if (this._gameBoard[0] == '2' &&
                   this._gameBoard[1] == '2' &&
                   this._gameBoard[2] == '2') {
            console.log('won 1st row 2');   
        } else if (this._gameBoard[3] == '1' &&
                   this._gameBoard[4] == '1' &&
                   this._gameBoard[5] == '1') {
            console.log('won 2nd row 1');   
        } else if (this._gameBoard[3] == '2' &&
                   this._gameBoard[4] == '2' &&
                   this._gameBoard[5] == '2') {
            console.log('won 2nd row 2');   
        } else if (this._gameBoard[6] == '1' &&
                   this._gameBoard[7] == '1' &&
                   this._gameBoard[8] == '1') {
            console.log('won 3rd row 1');   
        } else if (this._gameBoard[6] == '2' &&
                   this._gameBoard[7] == '2' &&
                   this._gameBoard[8] == '2') {
            console.log('won 3rd row 2');   
        } else if (this._gameBoard[0] == '1' &&
                   this._gameBoard[3] == '1' &&
                   this._gameBoard[6] == '1') {
            console.log('won 1st column 1');   
        } else if (this._gameBoard[0] == '2' &&
                   this._gameBoard[3] == '2' &&
                   this._gameBoard[6] == '2') {
            console.log('won 2nd column 2');   
        } else if (this._gameBoard[1] == '1' &&
                   this._gameBoard[4] == '1' &&
                   this._gameBoard[7] == '1') {
            console.log('won 2nd column 2');   
        } else if (this._gameBoard[1] == '2' &&
                   this._gameBoard[4] == '2' &&
                   this._gameBoard[7] == '2') {
            console.log('won 2nd column 2');   
        } else if (this._gameBoard[2] == '1' &&
                   this._gameBoard[5] == '1' &&
                   this._gameBoard[8] == '1') {
            console.log('won 3rd column 1');
        } else if (this._gameBoard[2] == '2' &&
                   this._gameBoard[5] == '2' &&
                   this._gameBoard[8] == '2') {
            console.log('won 3rd column 2');   
        } else if (this._gameBoard[0] == '1' &&
                   this._gameBoard[4] == '1' &&
                   this._gameBoard[8] == '1') {
            console.log('won left diagonal 1');   
        } else if (this._gameBoard[0] == '2' &&
                   this._gameBoard[4] == '2' &&
                   this._gameBoard[8] == '2') {
            console.log('won left diagonal 2');   
        } else if (this._gameBoard[2] == '1' &&
                   this._gameBoard[4] == '1' &&
                   this._gameBoard[6] == '1') {
            console.log('won right diagonal 1');   
        } else if (this._gameBoard[2] == '2' &&
                   this._gameBoard[4] == '2' &&
                   this._gameBoard[6] == '2') {
            console.log('won right diagonal 2');   
        }
    }
}
var test = new TicTacToe();
console.log(test.gameWon());