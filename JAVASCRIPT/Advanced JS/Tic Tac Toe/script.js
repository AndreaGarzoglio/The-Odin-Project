// Gameboard Module

const Gameboard = (() => {
    let board = Array(9).fill("");
    const getBoard = () => board;
    const placeMarks = (index, mark) => {
        if (board[index] !== "") {
            return false;
        }
        board[index] = mark;
        return true;
    };

    const reset = () => {
        board.fill("");
    };

    return { getBoard, placeMarks, reset };
})();

// Player Module

const Player = (name, mark) => {
    return { name, mark };
};

// Game Controller Module

const GameController = (() => {
    let currentPlayer;
    let playerX;
    let playerO;

    const initGame = (name1, name2) => {
        playerX = Player(name1, "X");
        playerO = Player(name2, "O");
        currentPlayer = playerX;
        Gameboard.reset();
    };

    const getCurrentPlayer = () => currentPlayer;

    const playRound = (index) => {
        const validMove = Gameboard.placeMarks(index, currentPlayer.mark);
        if (!validMove) {
            return;
        }
        if (checkWin()) {
            DisplayController.updateStatus(`${currentPlayer.name} wins!`);
            return;
        }
        if (checkTie()) {
            DisplayController.updateStatus("It's a tie!");
            return;
        }
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
        DisplayController.updateStatus(`${currentPlayer.name}'s turn`);

    };

    const checkWin = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
            [0, 4, 8], [2, 4, 6]              // diagonals
        ];
        const board = Gameboard.getBoard();
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] === currentPlayer.mark && board[b] === currentPlayer.mark && board[c] === currentPlayer.mark) {
                return true;
            }
        }
        return false;
    };

    const checkTie = () => {
        const board = Gameboard.getBoard();
        if (board.every(cell => cell !== "") && !checkWin()) {
            return true;
        }
        return false;
    };

    const reset = () => {
        Gameboard.reset();
        currentPlayer = playerX;
    };

    return { playRound, checkWin, checkTie, reset, initGame, getCurrentPlayer };
})();

// Display Controller

const DisplayController = (() => {
    const cells = document.querySelectorAll('.cell');
    const statusDisplay = document.querySelector('#status');
    const board = document.querySelector('.board');

    const render = () => {
        const gameBoard = Gameboard.getBoard();
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
            cell.classList.remove('x', 'o');
            if (gameBoard[index] === 'X') {
                cell.classList.add('x');
            } else if (gameBoard[index] === 'O') {
                cell.classList.add('o');
            }
        });
        updateBoardGlow();
    };

    const updateBoardGlow = () => {
        board.classList.remove('x-turn', 'o-turn');
        const currentPlayer = GameController.getCurrentPlayer();
        if (currentPlayer.mark === 'X') {
            board.classList.add('x-turn');
        } else {
            board.classList.add('o-turn');
        }
    };

    const updateStatus = (message) => {
        statusDisplay.textContent = message;
    };

    const init = () => {
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                GameController.playRound(index);
                render();
            });
        });
    };

    return { render, updateStatus, init };
})();

// Initialize the game
const playerSetupDiv = document.getElementById('player-setup');
const gameContainerDiv = document.getElementById('game-container');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', () => {
    const player1Name = document.getElementById('player1-name').value || 'Player 1';
    const player2Name = document.getElementById('player2-name').value || 'Player 2';

    GameController.initGame(player1Name, player2Name);

    playerSetupDiv.style.display = 'none';
    gameContainerDiv.style.display = 'flex';

    DisplayController.init();
    DisplayController.render();
    DisplayController.updateStatus(`${GameController.getCurrentPlayer().name}'s turn`);
});

resetBtn.addEventListener('click', () => {
    GameController.reset();
    DisplayController.render();
    DisplayController.updateStatus(`${GameController.getCurrentPlayer().name}'s turn`);
});

