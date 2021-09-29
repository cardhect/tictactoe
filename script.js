//TODO figure out how to add the array elements to 3 rows in a group of 3 in order to have a 3x3 square.

const gameBoard = (function () {
  let gameBoard = [
    ["x"],
    ["o"],
    ["x"],
    ["o"],
    ["x"],
    ["o"],
    ["x"],
    ["o"],
    ["x"],
  ];

  /**
   * ? This can create a 3x3 grid but currently does not have the array...
   * ? ...elements linked to each square.
   */
   let count = 0;
  function _createGrid(x) {
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let i = 0; i < x; i++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
            cell.addEventListener('click', () => {
               
                if(count % 2 == 0){
                    cell.style.background = 'blue';
                    cell.innerHTML = 'x';
                    console.log(count);
                    count++;
                } else if(count % 2 == 1) {
                    cell.style.background = 'yellow';
                    cell.innerHTML = 'o';
                    count++;
                }
            
            })
        }
    }
  }

  // Create an unordered list
  var list = document.createElement("div");

  // Create a list item for each selection
  // and append it to the list
  gameBoard.forEach(function (selection) {
    var li = document.createElement("div");
    li.textContent = selection;
    list.appendChild(li);
  });

  // Log
  console.log(list);

  // Inject into the DOM
  var app = document.querySelector("#container");
  app.appendChild(list);



  return {
    createdGrid: function () {
      _createGrid(3);
    },
  };
})();

const playerCreation = (name) => {
  
    const p1Welcome = () =>
    console.log("Logging in.... Welcome! " + name + " is player 1.");

  const p2Welcome = () =>
    console.log("Logging in.... Welcome! " + name + " is player 2.");

  return { name, p1Welcome, p2Welcome };
};
