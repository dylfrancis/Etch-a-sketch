const gridContainer = document.querySelector(".grid-container");

function createSquares() {
  for (let i = 0; i < 20; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 20; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
    gridContainer.appendChild(row);
  }
}

createSquares();
