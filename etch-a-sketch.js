const grid = document.querySelector(".grid");
const currentMode = new Map();
let mouseDown = false;
let gridSize = 32;

for (let x = 0; x < gridSize; ++x) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    grid.appendChild(gridRow);
    for (let y = 0; y < gridSize; ++y) {
        const div = document.createElement("div");
        div.classList.add("grid-box");
        div.addEventListener('mousedown', setMouseState);
        div.addEventListener('mousemove', colorBox);
        div.addEventListener('mouseup', setMouseState);
        gridRow.appendChild(div);
    }
}

btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener('click', toggle);
    currentMode.set(e.target.className, false);
});
currentMode.set('color-mode', true);

function toggle(e) {
    btns.forEach(btn => {
        if (btn != e.target) {
            btn.classList.remove("toggle");
            currentMode.set(e.target.className, false);
        }
    });
    e.target.classList.toggle("toggle");
    currentMode(e.target.className, true);
}

function setMouseState(e) {
    var flags = e.buttons !== undefined ? e.buttons : e.which;
    mouseDown = (flags & 1) === 1;
}

function interactWithBox(e) {
    if (currentMode.get('color-mode'))
        colorBox(e);
    else if (currentMode.get('darken-mode'))
        darkenBox(e);
    else if (currentMode.get('rainbow-mode'))
        rainbowBox(e);
}

function colorBox(e) {
    if (!mouseDown)
        return;
    const colorPicker = document.querySelector("#color-picker");
    e.target.style.backgroundColor = colorPicker.value;
}

function darkenBox(e) {

}

function rainbowBox(e) {

}