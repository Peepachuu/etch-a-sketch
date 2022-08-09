const grid = document.querySelector(".grid");
let mouseDown = false;
let gridSize = 32;
let currentMode = "color";

createNewGrid();

function interactWithBox(e) {
    if (currentMode == "color") {
        colorBox(e);
    } else if (currentMode == "rainbow") {
        rainbowBox(e);
    } else if (currentMode == "eraser") {
        eraseBox(e);
    }
}

function setMouseState(e) {
    let flags = e.buttons !== undefined ? e.buttons : e.which;
    mouseDown = (flags & 1) === 1;
}

const modes = document.querySelectorAll(".modes button");
modes.forEach(mode => {
    mode.addEventListener('click', switchMode);
    if (mode.id == currentMode) {
        mode.classList.toggle("toggle");
    }
});


function switchMode(e) {
    if (e.target.id == currentMode)
        return;

    modes.forEach(mode => {
        if (e.target != mode)
            mode.classList.remove("toggle");
    });
    if (e.target.id == "color") {
        interactWithBox = colorBox;
        currentMode = "color";
    } else if (e.target.id == "eraser") {
        interactWithBox = eraseBox;
        currentMode = "eraser";
    } else if (e.target.id == "rainbow") {
        interactWithBox = rainbowBox;
        currentMode = "rainbow";
    }
    e.target.classList.toggle("toggle");
}

function toggleSetting() {

}

function colorBox(e) {
    if (!mouseDown)
        return;
    const colorPicker = document.querySelector("#color-picker");
    e.target.style.backgroundColor = colorPicker.value;
}

function rainbowBox(e) {
    if (!mouseDown)
        return;
    const color = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + color;
}


function eraseBox(e) {
    if (!mouseDown)
        return;
    e.target.style.backgroundColor = "#ffffff";
}

const gridSizeSlider = document.querySelector("#grid-size");
gridSizeSlider.addEventListener("change", () => {
    gridSize = gridSizeSlider.valueAsNumber;
    removeGridChildren();
    createNewGrid();
});

const gridSizeText = document.querySelector(".grid-size-text");
gridSizeSlider.addEventListener("input", () => {
    gridSizeText.textContent = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
});

function removeGridChildren() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function createNewGrid() {
    for (let x = 0; x < gridSize; ++x) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        grid.appendChild(gridRow);
        for (let y = 0; y < gridSize; ++y) {
            const div = document.createElement("div");
            div.classList.add("grid-box");
            div.addEventListener('mousedown', (e) => {
                setMouseState(e);
                interactWithBox(e);
            });
            div.addEventListener('mouseenter', interactWithBox);
            div.addEventListener('mouseup', setMouseState);
            gridRow.appendChild(div);
        }
    }
}