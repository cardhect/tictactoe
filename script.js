// Steps 1,2,3 are done. Need to start on 4.
//game board will run the game(switch turns from p1 to p2..., check if win conditions are met ,place marks x||o, reset game, track winner)
//display board will... display board, reset board, show win message.)
const personFactory = (name, selection) => {
  return { name, selection };
};

const gameBoard = (function () {
  const playerOne = personFactory("Player One", "x");
  const playerTwo = personFactory("Player Two", "o");

  let gameArr = ["", "", "", "", "", "", "", "", ""];

  let turnCounter = 0;

  //Uses switch statement to check if any of the win conditions are met. It defaults to a tie if there is no winner by the end. If game is not finished it will default to a console message telling users game is not over
  const checkWinner = () => {
    //win conditions 0,1,2 - 3,4,5 - 6,7,8 - 0,3,6 - 1,4,7 - 2,5,8 - 0,4,8 - 2,4,6 (also each can win in reversed order.)
    const winCon1 = gameArr[0] + gameArr[1] + gameArr[2];
    const winCon2 = gameArr[3] + gameArr[4] + gameArr[5];
    const winCon3 = gameArr[6] + gameArr[7] + gameArr[8];
    const winCon4 = gameArr[0] + gameArr[3] + gameArr[6];
    const winCon5 = gameArr[1] + gameArr[4] + gameArr[7];
    const winCon6 = gameArr[2] + gameArr[5] + gameArr[8];
    const winCon7 = gameArr[0] + gameArr[4] + gameArr[8];
    const winCon8 = gameArr[2] + gameArr[4] + gameArr[6];

    let winConditionX = "xxx";
    let winConditionO = "ooo";
    switch (winConditionX) {
      case winCon1:
        alert("You win! X");
        break;
      case winCon2:
        alert("You win! X");
        break;
      case winCon3:
        alert("You win! X");
        break;
      case winCon4:
        alert("You win! X");
        break;
      case winCon5:
        alert("You win! X");
        break;
      case winCon6:
        alert("You win! X");
        break;
      case winCon7:
        alert("You win! X");
        break;
      case winCon8:
        alert("You win! X");
      default:
        switch (winConditionO) {
          case winCon1:
            alert("You win! O!");
            break;
          case winCon2:
            alert("You win! O!");
            break;
          case winCon3:
            alert("You win! O!");
            break;
          case winCon4:
            alert("You win! O!");
            break;
          case winCon5:
            alert("You win! O!");
            break;
          case winCon6:
            alert("You win! O!");
            break;
          case winCon7:
            alert("You win! O!");
            break;
          case winCon8:
            alert("You win! O!");
          default:
            if (gameBoard.turnCounter == 9) {
              console.log("Its a tie!");
            } else {
              console.log("There is no winner... Keep going!");
            }
        }
    }
  };

  return { gameArr, checkWinner, turnCounter };
})();

const displayController = (function () {

    //Creating a function that will allow the player to enter their name.
    const nameSelect = () => {
        const body = document.querySelector('body');
        const nameInput = document.createElement('textarea');
        const button = document.createElement('button');
        const form = document.createElement('form');

        body.append(form);
        form.append(nameInput);
        form.append(button);
    }


  const display = () => {
    const gameArr = gameBoard.gameArr;
    const gameDiv = document.getElementById("game-board");
    const body = document.querySelector('body');

    //displays name and whose turn it is under play area.
    const nameDisplay = document.createElement('h1');
    nameDisplay.textContent = 'Hex Turn...';
    body.append(nameDisplay);


    let i = 0;

    for (let index = 0; index < gameArr.length; index++) {
    //This creates the box play area.
      const selection = gameArr[index];
      const boxElement = document.createElement("button");
      boxElement.classList.add(`game-box`);
      boxElement.setAttribute("data-index-number", index + 1);
      boxElement.textContent = selection;
      gameDiv.append(boxElement);
    
    //This adds a event listener to each box.
      boxElement.addEventListener("click", function (e) {
        //selection == data-index-number
        let boxDataIndexNum = parseInt(e.target.attributes[1].value);
        //returns selected div by using the data index number.
        const selectedBox = document.querySelector(
          `[data-index-number="${boxDataIndexNum}"]`
        );

        // This checks if square is empty. if it is then it is marked with a X or O. It also checks if square is marked, if it is it does not let user place a marker.

        if (i % 2 == 1 && gameArr[boxDataIndexNum - 1] == "") {
          console.log("O was marked");
          gameArr[boxDataIndexNum - 1] = "o";
          console.log(gameArr + ' ' + i);
          selectedBox.textContent = "o";
          i++;
          gameBoard.turnCounter++;
          console.log(gameBoard.turnCounter)
        } else if (i % 2 != 1 && gameArr[boxDataIndexNum - 1] == "") {
          console.log("X was marked");
          gameArr[boxDataIndexNum - 1] = "x";
          console.log(gameArr + ' ' + i);
          selectedBox.textContent = "x";
          i++;
          gameBoard.turnCounter++;
          console.log(gameBoard.turnCounter)
        } else {
          console.log("Spot is taken. Pick another.");
          console.log(i);
        }
        if (i >= 4) {
          gameBoard.checkWinner();
        } 
      });
    }
  };

  return { display, nameSelect };
})();

//displayController.display();
