'use strict';

class TicTacToe {
    constructor() {
        this._gameBoard = ["", "", "", "", "", "", "", "", "",];
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
    getPiece(index) {
        return this._gameBoard[index];
    }
    
    increaseScore(player) {
        if (player.toUpperCase() == "X") {
            this._xWins += 1;    
        } else if (player.toUpperCase() == "Y") {
            this._yWins += 1;   
        }
    }
    
    resetBoard() {
        this._gameBoard = ["", "", "", "", "", "", "", "", "",];
        this._currentPlayer = 'X';
        this._gameOver = false;
        this.changePlayer(); //alternate between players 
    }
    
    changePlayer() {
        if (this._currentPlayer == 'X') {
            this._currentPlayer = 'Y';   
        } else {
            this._currentPlayer = 'X';   
        }
    }
    
    move(id) {
        if(this._gameBoard[id] == "") {
            this._gameBoard[id] = this._currentPlayer;  
            this.gameWon();
            this.changePlayer();
        } else {
            //cannot move here 
        }
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
        } else {
            var isTie = true;
            for (var i = 0; i < this.gameBoard.length; i++) {
                if (this.gameBoard[i] == "") {
                    isTie = false;   
                }
            }
            if (isTie) {
                console.log('tie');
                this._gameOver = true;
                this._ties += 1;
            }
        } 
    }
}

var test = new TicTacToe();
test.move();
console.log(test.currentPlayer);
console.log(test.xWins);

module.exports.TicTacToe = TicTacToe;