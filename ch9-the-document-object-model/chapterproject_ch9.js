// 1
    let outputEl = document.querySelector(".output");

// 2

    let mainList = outputEl.querySelector("ul");
    mainList.id = "mainList";

// 3
    let allDivs = document.querySelectorAll("div");
    console.dir(allDivs);

// 4

    function updateIDs(div, index){
        div.id = "id"+String(index);
    };

    allDivs.forEach(updateIDs);

    // This uses the very useful forEach() method (which is basically a forloop that gives an interation index);