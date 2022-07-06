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
    ['','','',
     '','','', 
     '','',''];

     //TODO find a way to check if win conditions have been met.
    const checkWinner = () => {
        if (condition) {
            
        } else {
            
        }
    }
    //win conditions 0,1,2 - 3,4,5 - 6,7,8 - 0,3,6 - 1,4,7 - 2,5,8 - 0,4,8 - 2,4,6 (also each can win in reversed order.)
          

    return {gameArr,playerOne,playerTwo,checkWinner};
})();

const displayController = (function () {
    
    const display = () => {
        const gameArr = gameBoard.gameArr;
        const gameDiv = document.getElementById("game-board");

        let i = 0;
       

        for (let index = 0; index < gameArr.length; index++) {
            const selection = gameArr[index];
            const boxElement = document.createElement("button");
            boxElement.classList.add(`game-box`);
            boxElement.setAttribute('data-index-number', index+1);
            boxElement.textContent = selection;
            gameDiv.append(boxElement);    
            
            
            boxElement.addEventListener("click", function(e){
                //selection == data-index-number
                let boxDataIndexNum = parseInt(e.target.attributes[1].value);
                //returns selected div by using the data index number.
                const selectedBox = document.querySelector(`[data-index-number="${boxDataIndexNum}"]`);
                // this is not working -- i am trying to figure out logic for selections by not letting user pick a square that is taken.
                if (i%2 == 1 && gameArr[boxDataIndexNum-1] == '' ) {
                    gameArr[boxDataIndexNum-1] = 'o'
                    console.log(gameArr);
                   selectedBox.textContent = 'o';   
                    i++;
                } else if (i%2 != 1 && gameArr[boxDataIndexNum-1] == '' ) {
                    console.log('this worked>' + i);
                    gameArr[boxDataIndexNum-1] = 'x'
                    console.log(gameArr);
                    selectedBox.textContent = 'x';
                    i++;
                } else {
                    console.log('Spot is taken. Pick another.');
                    console.log(i);
                }
                if (i == 9) {
                    console.log('game is over');                    
                }
                
            })

        }
        
    }
    
    return {display};
})();



displayController.display();