const grid = document.querySelector(".grid");
let mouseDown = false;
let gridSize = 32;

for (let x = 0; x < gridSize; ++x) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    grid.appendChild(gridRow);
    for (let y = 0; y < gridSize; ++y) {
        const div = document.createElement("div");
        div.classList.add("grid-box");
        div.addEventListener('mousedown', (e) => {
            setMouseState(e);
            colorBox(e);
        });
        div.addEventListener('mousemove', colorBox);
        div.addEventListener('mouseup', setMouseState);
        gridRow.appendChild(div);
    }
}

btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener('click', toggle);
    if (btn.className == 'color-mode') {
        btn.classList.toggle("toggle");
    }
});

function toggle(e) {
    btns.forEach(btn => {
        if (btn != e.target) {
            btn.classList.remove("toggle");
        }
    });
    e.target.classList.toggle("toggle");
}

function setMouseState(e) {
    let flags = e.buttons !== undefined ? e.buttons : e.which;
    mouseDown = (flags & 1) === 1;
}

function interactWithBox(e) {
}

function colorBox(e) {
    if (!mouseDown)
        return;
    const colorPicker = document.querySelector("#color-picker");
    e.target.style.backgroundColor = colorPicker.value;
}

function darkenBox(e) {
    if (!mouseDown)
        return;
    const color = e.target.style.backgroundColor;
    console.log(color);
}

function rainbowBox(e) {

}
