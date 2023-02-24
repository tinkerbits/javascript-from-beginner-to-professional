


let allDivs = document.querySelectorAll("div");

function changeBgColour(colour){
    let bodyEl = document.querySelector("body");
    bodyEl.setAttribute("style", `background-color: ${colour}`);
}

for(let div of allDivs){
    div.addEventListener("click", function(){changeBgColour(div.textContent)})
}