'use strict';

class TicTacToe {
    constructor() {
        this._gameBoard = ["", "", "", "", "", "", "", "", "",];
        this._currentPlayer = 'X'; 
        this._xWins = 0;
        this._yWins = 0;
        this._ties = 0;
        this._gameOver = false;
        this._tiedGame = false;
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
    
    get gameOver() {
        return this._gameOver;   
    }
    getPiece(index) {
        return this._gameBoard[index];
    }
    
    /**
    * Increases the win count of a player
    * @param {String} player who to increase the win count for
    */ 
    increaseScore(player) {
        if (player.toUpperCase() == "X") {
            this._xWins += 1;    
        } else if (player.toUpperCase() == "Y") {
            this._yWins += 1;   
        }
    }
    
    /**
    * Shows the current player, or the game result if the game is over
    * @return {String} the current player if the game is not over, the game result otherwise
    */ 
    displayInfo() {
        if (!this._gameOver) {
            return ("Your turn, " + this._currentPlayer + "!");   
        } else {
            if (this._tiedGame) {
                return("No winner!");    
            } else {
                return("Winner: " + this._currentPlayer + "!");   
            }
        }
    }
    
    /**
    * Starts the game over
    */ 
    resetBoard() {
        this._gameBoard = ["", "", "", "", "", "", "", "", "",];
        this._gameOver = false;
        this._tiedGame = false;
        this.changePlayer(); //alternate between starting players 
    }
    
    /**
    * Switches the current player
    */ 
    changePlayer() {
        if (this._currentPlayer == 'X') {
            this._currentPlayer = 'Y';   
        } else {
            this._currentPlayer = 'X';   
        }
    }
    
    /**
    * Adds in a piece onto the gameboard 
    * @param {number} id where to add in the piece on the board
    */ 
    move(id) {
        if (!this._gameOver) {
            if(this._gameBoard[id] == "") { //cannot add a piece to a place where there is already one
                this._gameBoard[id] = this._currentPlayer;  
                this.gameWon();
                if (!this._gameOver) {
                    this.changePlayer();
                }
            } 
        }
    }
    
    /**
    * Checks to see if the game is over 
    */ 
    gameWon() {
        if (this._gameBoard[0] == this._currentPlayer && this._gameBoard[1] == this._currentPlayer && this._gameBoard[2] == this._currentPlayer ||
            this._gameBoard[3] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[5] == this._currentPlayer ||
            this._gameBoard[6] == this._currentPlayer && this._gameBoard[7] == this._currentPlayer && this._gameBoard[8] == this._currentPlayer ||
            this._gameBoard[0] == this._currentPlayer && this._gameBoard[3] == this._currentPlayer && this._gameBoard[6] == this._currentPlayer ||
            this._gameBoard[1] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[7] == this._currentPlayer ||
            this._gameBoard[2] == this._currentPlayer && this._gameBoard[5] == this._currentPlayer && this._gameBoard[8] == this._currentPlayer ||
            this._gameBoard[0] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[8] == this._currentPlayer ||
            this._gameBoard[2] == this._currentPlayer && this._gameBoard[4] == this._currentPlayer && this._gameBoard[6] == this._currentPlayer) {
            this._gameOver = true;
            if (this._currentPlayer == 'X') {
                this._xWins += 1;
            } else {
                this._yWins += 1;   
            }
        }
        //checks to see if the game is tied
        var isTie = true;
        for (var i = 0; i < this._gameBoard.length; i++) {
            if (this._gameBoard[i] == "") {
                isTie = false;   
            }
        }
        if (isTie) {
            this._gameOver = true;
            this._ties += 1;
        }
        this._tiedGame = isTie;
    }
}

module.exports.TicTacToe = TicTacToe;