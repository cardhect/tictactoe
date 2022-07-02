// Steps 1,2,3 are done. Need to start on 4.
//game board will run the game(switch turns from p1 to p2..., check if win conditions are met ,place marks x||o, reset game, track winner)
//display board will... display board, reset board, show win message.)
const personFactory = (name, selection) => {
    
    return {name, selection};
};

const gameBoard = (function () {
    const playerOne = personFactory('Player One', 'x');
    const playerTwo = personFactory('Player Two', 'o');

    let gameArr = 
    ['x','o','x',
     'o','x','o', 
     'o','x','o'];

          

    return {gameArr};
})();

const displayController = (function () {
    
    const display = () => {
        const gameArr = gameBoard.gameArr;
        const gameDiv = document.getElementById("game-board");

        for (let index = 0; index < gameArr.length; index++) {
            const selection = gameArr[index];
            const boxElement = document.createElement("div");
            boxElement.classList.add(`game-box`);
            boxElement.setAttribute('data-index-number', index+1);
            boxElement.textContent = selection;
            gameDiv.append(boxElement);    
        }
        
    }
    
    return {display};
})();



displayController.display();