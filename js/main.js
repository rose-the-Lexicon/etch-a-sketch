const container = document.getElementById("container");

function resetSize (sizeOfEtch) {
    container.replaceChildren();
    startEtch(sizeOfEtch);
}

function hoverColor () {
    const drawingDiv = document.getElementsByClassName("drawing-div");
    for (let i = 0; i < drawingDiv.length; i++) {
        drawingDiv[i].addEventListener("mouseenter", function (){
            drawingDiv[i].setAttribute("style", "background-color: black;");
        })
    }
}

const reset = () => {
    const drawingDiv = document.getElementsByClassName("drawing-div");
    const buttonReset = document.getElementById("reset");

    buttonReset.addEventListener("click", () => {
        for (let i = 0; i < drawingDiv.length; i++) {
            drawingDiv[i].setAttribute("style", "background-color: white");
        }
    })
}

function startEtch (num) {
    for(let i = 0; i < num; i++){
        const newParentDiv = document.createElement("div");
        newParentDiv.className = "drawing-parent-div";

        for(let i = 0; i < num; i++){
            const newDiv = document.createElement("div");
            newDiv.className = "drawing-div";
            newParentDiv.appendChild(newDiv);
        }
        container.appendChild(newParentDiv);
    }
    
    hoverColor();
    reset();
}

function onClickResize() {
    const buttonResize = document.getElementById("resize");

    buttonResize.addEventListener("click", function () {
        let continuePrompt = true;
        let size = 0;
        while (continuePrompt === true) {
            if (size < 101 && size > 0) {
                resetSize(size);
                continuePrompt = false;
            } else {
                size = prompt("please put only numbers, and make sure it's 100 or below\n it'll be a grid of that number * number");
        }
        }
    })

}

startEtch(16);
onClickResize();