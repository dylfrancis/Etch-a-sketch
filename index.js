const gridContainer = document.querySelector(".grid-container");

function createSquares(dimension) {
  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < dimension; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
    gridContainer.appendChild(row);
  }
}

function adjustPadding(dimension) {
  const column = document.querySelectorAll(".column");
  const paddingEm = 1.2 - 0.01 * dimension;
  for (let i = 0; i < dimension * dimension; i++) {
    column[i].style.padding = `${paddingEm}em`;
  }
}

function createGrid(dimension) {
  createSquares(dimension);
  adjustPadding(dimension);
}

createGrid(16);
