'use strict';

class TicTacToe {
    constructor() {
        this._gameBoard = [1,1,1,0,0,0,0,0,0];
        this._currentPlayer = 1;
        this._xWins = 0;
        this._yWins = 0;
        this._ties = 0;
    }
    
    get gameBoard() {
        return this._gameBoard;   
    }
    
    get currentPlayer() {
        return this._currentPlayer;   
    }
    
    get xWins() {
        return this._xWins;   
    }
    
    get yWins() {
        return this._yWins   
    }
    
    get ties() {
        return this._ties;   
    }

    reset() {
        this.gameBoard = [0,0,0,0,0,0,0,0,0];
    }
    
    changePlayer() {
        if (this._currentPlayer == 1) {
            this._currentPlayer = 2;   
        } else {
            this._currentPlayer = 1;   
        }
    }
    
    move() {
        
    }
    
    gameWon() {
        if (this._gameBoard[0] == '1' && this._gameBoard[1] == '1' && this._gameBoard[2] == '1' ||
            this._gameBoard[3] == '1' && this._gameBoard[4] == '1' && this._gameBoard[5] == '1' ||
            this._gameBoard[6] == '1' && this._gameBoard[7] == '1' && this._gameBoard[8] == '1' ||
            this._gameBoard[0] == '1' && this._gameBoard[3] == '1' && this._gameBoard[6] == '1' ||
            this._gameBoard[1] == '1' && this._gameBoard[4] == '1' && this._gameBoard[7] == '1' ||
            this._gameBoard[2] == '1' && this._gameBoard[5] == '1' && this._gameBoard[8] == '1' ||
            this._gameBoard[0] == '1' && this._gameBoard[4] == '1' && this._gameBoard[8] == '1' ||
            this._gameBoard[2] == '1' && this._gameBoard[4] == '1' && this._gameBoard[6] == '1') {
            console.log('winner:1');
        } else if (this._gameBoard[0] == '2' && this._gameBoard[1] == '2' && this._gameBoard[2] == '2' ||
            this._gameBoard[3] == '2' && this._gameBoard[4] == '2' && this._gameBoard[5] == '2' ||
            this._gameBoard[6] == '2' && this._gameBoard[7] == '2' && this._gameBoard[8] == '2' ||
            this._gameBoard[0] == '2' && this._gameBoard[3] == '2' && this._gameBoard[6] == '2' ||
            this._gameBoard[1] == '2' && this._gameBoard[4] == '2' && this._gameBoard[7] == '2' ||
            this._gameBoard[2] == '2' && this._gameBoard[5] == '2' && this._gameBoard[8] == '2' ||
            this._gameBoard[0] == '2' && this._gameBoard[4] == '2' && this._gameBoard[8] == '2' ||
            this._gameBoard[2] == '2' && this._gameBoard[4] == '2' && this._gameBoard[6] == '2') {
            console.log('winner:2');
        } else if (this._gameBoard.length == 9) {
            console.log('tie');
        } 
    }
}
var test = new TicTacToe();
console.log(test.gameWon());

module.exports.TicTacToe = TicTacToe;