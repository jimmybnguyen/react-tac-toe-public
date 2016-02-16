'use strict';

class TicTacToe {
    constructor() {
        this._gameBoard = ["X", "", "", "", "", "", "", "", "",];
        this._currentPlayer = 'X';
        this._xWins = 0;
        this._yWins = 0;
        this._ties = 0;
        this._gameOver = false;
    }
    
    get gameBoard() {
        return this._gameBoard;   
    }
    
    get currentPlayer() {
        if (this._gameOver) {
            return undefined;   
        } else {
            return this._currentPlayer;
        }
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
    
    get gameOver() {
        return this._gameOver;   
    }
    
    increaseScore(player) {
        if (player.toUpperCase() == "X") {
            this._xWins += 1;    
        } else if (player.toUpperCase() == "Y") {
            this._yWins += 1;   
        }
    }
    reset() {
        this._gameBoard = ["", "", "", "", "", "", "", "", "",];
    }
    
    changePlayer() {
        if (this._currentPlayer == 'X') {
            this._currentPlayer = 'Y';   
        } else {
            this._currentPlayer = 'X';   
        }
    }
    
    move() {
        this.changePlayer();
    }
    
    gameWon() {
        if (this._gameBoard[0] == this._currentPlayer && this._gameBoard[1] == this._currentPlayer && this._gameBoard[2] == this._currentPlayer ||
            this._gameBoard[3] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[5] == this._currentPlayer ||
            this._gameBoard[6] == this._currentPlayer && this._gameBoard[7] == this._currentPlayer && this._gameBoard[8] == this._currentPlayer ||
            this._gameBoard[0] == this._currentPlayer && this._gameBoard[3] == this._currentPlayer && this._gameBoard[6] == this._currentPlayer ||
            this._gameBoard[1] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[7] == this._currentPlayer ||
            this._gameBoard[2] == this._currentPlayer && this._gameBoard[5] == this._currentPlayer && this._gameBoard[8] == this._currentPlayer ||
            this._gameBoard[0] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[8] == this._currentPlayer ||
            this._gameBoard[2] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[6] == this._currentPlayer) {
            console.log('winner: ' + this._currentPlayer);
            this._gameOver = true;
            if (this._currentPlayer == 'X') {
                this._xWins += 1;
            } else {
                this._yWins += 1;   
            }
        } else if (this._gameBoard.length == 9) {
            console.log('tie');
            this._gameOver = true;
            this._ties += 1;
        } 
    }
    
    /*
    gameWon() {
        if (this._gameBoard[0] == 'X' && this._gameBoard[1] == 'X' && this._gameBoard[2] == 'X' ||
            this._gameBoard[3] == 'X' && this._gameBoard[4] == 'X' && this._gameBoard[5] == 'X' ||
            this._gameBoard[6] == 'X' && this._gameBoard[7] == 'X' && this._gameBoard[8] == 'X' ||
            this._gameBoard[0] == 'X' && this._gameBoard[3] == 'X' && this._gameBoard[6] == 'X' ||
            this._gameBoard[1] == 'X' && this._gameBoard[4] == 'X' && this._gameBoard[7] == 'X' ||
            this._gameBoard[2] == 'X' && this._gameBoard[5] == 'X' && this._gameBoard[8] == 'X' ||
            this._gameBoard[0] == 'X' && this._gameBoard[4] == 'X' && this._gameBoard[8] == 'X' ||
            this._gameBoard[2] == 'X' && this._gameBoard[4] == 'X' && this._gameBoard[6] == 'X') {
            console.log('winner:X');
        } else if (this._gameBoard[0] == 'Y' && this._gameBoard[1] == 'Y' && this._gameBoard[2] == 'Y' ||
            this._gameBoard[3] == 'Y' && this._gameBoard[4] == 'Y' && this._gameBoard[5] == 'Y' ||
            this._gameBoard[6] == 'Y' && this._gameBoard[7] == 'Y' && this._gameBoard[8] == 'Y' ||
            this._gameBoard[0] == 'Y' && this._gameBoard[3] == 'Y' && this._gameBoard[6] == 'Y' ||
            this._gameBoard[1] == 'Y' && this._gameBoard[4] == 'Y' && this._gameBoard[7] == 'Y' ||
            this._gameBoard[2] == 'Y' && this._gameBoard[5] == 'Y' && this._gameBoard[8] == 'Y' ||
            this._gameBoard[0] == 'Y' && this._gameBoard[4] == 'Y' && this._gameBoard[8] == 'Y' ||
            this._gameBoard[2] == 'Y' && this._gameBoard[4] == 'Y' && this._gameBoard[6] == 'Y') {
            console.log('winner:Y');
        } else if (this._gameBoard.length == 9) {
            console.log('tie');
        } 
    }*/
}

var test = new TicTacToe();
console.log(test.gameBoard[0]);
test.increaseScore("X");
console.log(test.xWins);

module.exports.TicTacToe = TicTacToe;