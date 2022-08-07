const grid = document.querySelector(".grid");
let gridSize = 16;

for (let x = 0; x < gridSize; ++x) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    grid.appendChild(gridRow);
    for (let y = 0; y < gridSize; ++y) {
        const div = document.createElement("div");
        div.classList.add("grid-box");
        gridRow.appendChild(div);
    }
}