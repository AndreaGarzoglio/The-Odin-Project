/*
    JavaScript Compendium (quick reference + basic syntax)

    Core concepts
    - Scope: where a variable is accessible.
        Syntax: const x = 1; { const y = 2; }
    - Closure: a function keeping access to outer variables after it returns.
        Syntax: const make = () => { let n = 0; return () => ++n; };
    - Encapsulation: hiding internal state behind a public API.
        Syntax: const api = (() => { let secret = 1; return { get: () => secret }; })();
    - Immutable vs mutable: whether a value can change in place.
        Syntax: const a = [1]; a.push(2); // mutable
                        const b = 'hi'; const c = b + '!'; // immutable

    Functions
    - Factory function: returns an object without using `new`.
        Syntax: const player = (name, mark) => ({ name, mark });
    - Higher-order function: takes/returns functions.
        Syntax: const twice = fn => x => fn(fn(x));
    - Callback: a function passed to another function.
        Syntax: [1, 2].forEach(n => console.log(n));

    Modules
    - Module pattern (IIFE): private state + returned public methods.
        Syntax: const Mod = (() => { let v = 0; return { inc: () => ++v }; })();
    - Revealing module: define functions first, then return them.
        Syntax: const Mod2 = (() => { const a = () => 1; return { a }; })();
    - Singleton: a module creates one shared instance.
        Syntax: const Settings = (() => { const get = () => 'v1'; return { get }; })();

    Data structures
    - Array: ordered list, great for the 3x3 board.
        Syntax: const board = Array(9).fill('');
    - Object: key/value container, good for players or config.
        Syntax: const player = { name: 'Alex', mark: 'X' };

    DOM & events
    - DOM: the page representation you can query and update.
        Syntax: const cell = document.querySelector('.cell');
    - Event listener: function that runs on user actions (clicks).
        Syntax: cell.addEventListener('click', () => console.log('click'));
    - Event delegation: one listener on a parent to handle children.
        Syntax: grid.addEventListener('click', e => e.target.matches('.cell'));

    Tic Tac Toe logic
    - Game state: board array + current player + game over flag.
        Syntax: let board = Array(9).fill(''); let current = 'X'; let over = false;
    - Render: update the UI from the current state.
        Syntax: cells[i].textContent = board[i];
    - Win check: compare board against all winning combos.
        Syntax: const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    - Tie: board full with no winner.
        Syntax: const tie = board.every(cell => cell !== '');
*/
