function changeMode(element){

    bodyEl = document.querySelector("body");
        
    if(element.innerText === 'light'){
        element.innerText = 'dark'
        bodyEl.setAttribute("style", "background-color: black; font: white")
    }else{
        element.innerText = 'light'
        bodyEl.setAttribute("style", "background-color: white; font: black")

    };
}

let changeModeBtn = document.querySelector("#lghtdrk")

changeModeBtn.addEventListener("click", (event) => changeMode(event.target))