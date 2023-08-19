const container = document.getElementById("container");

function startEtch (num) {
    for(let i = 0; i < num; i++){
        const newParentDiv = document.createElement("div");
        newParentDiv.className = "drawing-parent-div";

        for(let i = 0; i < num; i++){
            console.log("@");
            const newDiv = document.createElement("div");
            newDiv.className = "drawing-div";
            newParentDiv.appendChild(newDiv);
        }
        container.appendChild(newParentDiv);
    }
}
startEtch(10);