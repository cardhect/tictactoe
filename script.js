// Steps 1,2,3 are done. Need to start on 4.
//game board will run the game(switch turns from p1 to p2..., check if win conditions are met ,place marks x||o, reset game, track winner)
//display board will... display board, reset board, show win message.)
const personFactory = (name, selection) => {
   let winner = 0;
	return { name, selection, winner };
};

const gameBoard = (function () {
	const playerOne = personFactory("Player One", "x");
	const playerTwo = personFactory("Player Two", "o");

	let gameArr = ["", "", "", "", "", "", "", "", ""];

	let turnCounter = 0;

    const countLog = () => {
        console.log(turnCounter);
    }

	const playGame = () => {};
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


        let arr =[[1,3,4],[2,3,4]] 


		let winConditionX = "xxx";
		let winConditionO = "ooo";
		switch (winConditionX) {
			case winCon1:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
				break;
			case winCon2:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
				break;
			case winCon3:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
				break;
			case winCon4:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
				break;
			case winCon5:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
				break;
			case winCon6:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
				break;
			case winCon7:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
				break;
			case winCon8:
				console.log(gameBoard.playerOne.name + ' Wins!');
                gameBoard.playerOne.winner = 1;
                displayController.winnersMessage();
			default:
				switch (winConditionO) {
					case winCon1:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
						break;
					case winCon2:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
						break;
					case winCon3:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
						break;
					case winCon4:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
						break;
					case winCon5:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
						break;
					case winCon6:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
						break;
					case winCon7:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
						break;
					case winCon8:
						console.log("player two Wins!");
                        gameBoard.playerTwo.winner = 1;
                        displayController.winnersMessage();
					default:
						if (gameBoard.turnCounter == 9) {
							console.log("Its a tie!");

						} else {
							console.log("There is no winner... Keep going!");
                            
						}
				}
		}
	};

	return { gameArr, checkWinner, turnCounter, playerOne, playerTwo, countLog };
})();

const displayController = (function () {
	//This can be used to hide the form.
	const hideForm = () => {
		const form = document.getElementById("form");

		form.style.display = "none";
	};

	//This grabs player's name and updates the playerOne.name value to user entered name when form is submitted. ]
	const nameSelect = () => {
		// const nameBtn = document.getElementById("name-btn");
		const nameValue = document.getElementById("name").value;

		gameBoard.playerOne.name = nameValue;
		// console.log(gameBoard.playerOne.name);

		return nameValue;
	};

    const winnersMessage = () => {
        const h2 = document.getElementById('turn-message');
        const playerOne = gameBoard.playerOne.name;
        const playerTwo = gameBoard.playerTwo.name;

        const playerOneWin = gameBoard.playerOne.winner;
        const playerTwoWin = gameBoard.playerTwo.winner;
        
        if (playerOneWin == 1) {
            h2.textContent = `${playerOne} wins!`
            
        } else if (playerTwoWin == 1) {
            h2.textContent = `${playerTwo} wins!`
            
        }
    }

	const display = () => {
		const gameArr = gameBoard.gameArr;
		const gameDiv = document.getElementById("game-board");
		const body = document.querySelector("body");

		//displays name and whose turn it is under play area.
        const h2 = document.createElement('h2');
        const playerName = gameBoard.playerOne.name;
		h2.setAttribute('id','turn-message');
        h2.textContent = `${playerName}, its your turn.`
		
		body.append(h2);
      


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
					console.log(gameArr + " " + i);
					selectedBox.textContent = "o";
					i++;
					gameBoard.turnCounter++;
					console.log(gameBoard.turnCounter);
                    //changes h2 to say this->
                    h2.textContent = `${playerName}, its your turn.`

				} else if (i % 2 != 1 && gameArr[boxDataIndexNum - 1] == "") {
                    console.log("X was marked");
					gameArr[boxDataIndexNum - 1] = "x";
					console.log(gameArr + " " + i);
					selectedBox.textContent = "x";
					i++;
					gameBoard.turnCounter++;
					console.log(gameBoard.turnCounter);
                    //changes h2 to say this->
                    h2.textContent = `player 2, its your turn.`

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

	return { display, nameSelect, hideForm, winnersMessage };
})();

// displayController.display();
