# Tic Tac Toe - Step-by-Step Guide

## Project Overview
You're building a complete Tic Tac Toe game with:
- **Game Logic**: Managing board state, win conditions, player turns
- **UI Rendering**: Displaying the board, updating on moves
- **User Interaction**: Handling clicks, showing game status
- **Architecture**: Using modules/factories to organize code

---

## Phase 1: HTML Structure (Foundation)

### Step 1.1: Create the Basic Layout
Your HTML needs:
1. A **title** for the game
2. A **status display** (showing whose turn it is, win/tie messages)
3. A **game board container** (3x3 grid)
4. Individual **cells** that can be clicked
5. A **restart button** to reset the game

**Example structure concept:**
```html
<h1>Tic Tac Toe</h1>
<div>Status: X's turn</div>
<div class="board">
  <div class="cell"></div>
  <div class="cell"></div>
  <!-- ... 7 more cells -->
</div>
<button>Restart Game</button>
```

**Your task**: Create this structure in [index.html](index.html). Each cell should have a way to identify which position it represents (hint: you could use `data-index` attribute).

---

## Phase 2: CSS Styling (Visual)

### Step 2.1: Style the Board
Your CSS should:
1. Create a **3x3 grid layout** (use CSS Grid or Flexbox)
2. Style **cells** with borders, size, and centered text
3. Add **hover effects** so users know cells are clickable
4. Style the **status display** and button
5. Make it **responsive** and visually appealing

**Example concept:**
```css
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  border: 2px solid #000;
  cursor: pointer;
  font-size: 2rem;
}
```

**Your task**: Write CSS to make the board look good and work well.

---

## Phase 3: JavaScript Logic (The Brain)

### Step 3.1: Understand the Architecture
You have 3 main concerns:
1. **Gameboard** - Stores the board state (9 cells with X/O/empty)
2. **Game Controller** - Manages game rules (turns, win checking, game over)
3. **Display Controller** - Updates the DOM based on game state

### Step 3.2: Build the Gameboard Module
This module should:
- Store a board array with 9 positions
- Have a method to place a mark (X or O) at a position
- Have a method to get a position's value
- Have a method to reset the board

**Example pattern:**
```javascript
const Gameboard = (() => {
  let board = Array(9).fill("");

  const getBoard = () => board;
  
  const placeMarks = (index, mark) => {
    // YOUR CODE: check if position is empty, then place mark
  };

  const reset = () => {
    // YOUR CODE: clear the board
  };

  return { getBoard, placeMarks, reset };
})();
```

**Your task**: Implement `placeMarks()` (should only allow empty cells) and `reset()`.

### Step 3.3: Create the Player Factory
This creates player objects:

**Example concept:**
```javascript
const Player = (name, mark) => {
  return { name, mark };
};

// Usage:
const playerX = Player("X", "X");
const playerO = Player("O", "O");
```

**Your task**: Implement a simple Player factory.

### Step 3.4: Build the Game Controller Module
This manages game logic:
- Track current player
- Validate and execute moves
- Check for win/tie conditions
- Switch players after each move
- Reset the game

**Key methods needed:**
```javascript
const GameController = (() => {
  let currentPlayer = playerX; // or wherever players come from

  const playRound = (index) => {
    // YOUR CODE: validate move, place mark, check win/tie, switch player
  };

  const checkWin = () => {
    // YOUR CODE: test all 8 winning combinations
  };

  const checkTie = () => {
    // YOUR CODE: check if board is full with no winner
  };

  const reset = () => {
    // YOUR CODE: reset game state
  };

  return { playRound, checkWin, checkTie, reset };
})();
```

**Winning combinations:**
```javascript
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]              // diagonals
];
```

**Your task**: 
- Implement `checkWin()` by comparing the board against these combinations
- Implement `checkTie()` to detect a full board
- Implement `playRound()` to handle a move

### Step 3.5: Build the Display Controller Module
This updates the UI:

**Example pattern:**
```javascript
const DisplayController = (() => {
  const cells = document.querySelectorAll('.cell');
  const statusDisplay = document.querySelector('???'); // find your status element

  const render = () => {
    // YOUR CODE: update each cell's text from the board
    // Loop through cells and set textContent to match board state
  };

  const updateStatus = (message) => {
    // YOUR CODE: update the status text
  };

  const init = () => {
    // YOUR CODE: add click listeners to cells
    // Each listener should call GameController.playRound(index)
    // Then call render() to update the display
  };

  return { render, updateStatus, init };
})();
```

**Your task**:
- Implement `render()` to display the current board
- Implement `updateStatus()` to show whose turn it is
- Implement `init()` with event delegation (one listener on board)

### Step 3.6: Wire It All Together
At the end of your script:

```javascript
DisplayController.init();
DisplayController.render();

// Connect button to reset
document.querySelector('button').addEventListener('click', () => {
  // YOUR CODE: call reset methods and re-render
});
```

**Your task**: Initialize the game and make the restart button work.

---

## Phase 4: Testing & Debugging

### Step 4.1: Manual Testing Checklist
- [ ] Can you click a cell and see X placed?
- [ ] Does it alternate to O?
- [ ] Does it detect a win?
- [ ] Does it detect a tie?
- [ ] Can you restart and play again?
- [ ] Does it prevent clicking occupied cells?

### Step 4.2: Common Issues
- **Cells not updating?** Check that `render()` is called after each move
- **Game doesn't end?** Verify `checkWin()` is being called and game state is updated
- **Can click same cell twice?** Add validation in `placeMarks()`

---

## Summary: What You're Learning
1. **Module Pattern** - Encapsulating code with closures
2. **Separation of Concerns** - Game logic vs UI updates
3. **Event Handling** - Responding to user clicks
4. **State Management** - Keeping game state in sync with the display
5. **DOM Manipulation** - Updating the page dynamically

Good luck! Start with Phase 1 (HTML), then Phase 2 (CSS), then tackle Phase 3 step by step.
