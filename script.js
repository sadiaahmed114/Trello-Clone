let onTheMoveElm = undefined;

allTickets = document.querySelectorAll(".ticket");

allTickets.forEach(ticketElm => {
    ticketElm.addEventListener('mousedown' , function (e) {
        console.log("e.target.className : " ,e.target.className);
        onTheMoveElm = e.target;
    })
});

allColumns = document.querySelectorAll(".column");

allColumns.forEach(columnElm => {

    columnElm.addEventListener("dragover" , (event) => {

        console.log("dragover", e.target.className)
        event.preventDefault();
        if(event.target.className === "column"){
            // event.target.style.backgroundColor = "blue"
        }
    });

    columnElm.addEventListener("dragleave" , (event) => {

        console.log("drag out", e.target.className)
        event.preventDefault();
        if(event.target.className === "column"){
            // event.target.style.backgroundColor = "rgb(209, 138, 204)"
        }
    });

    columnElm.addEventListener('drop' , function (e) {

        console.log("drop event")
        console.log("e.target.className : " ,e.target);
        if(e.target.className === "column"){
           
        }

        e.target.appendChild(onTheMoveElm)
    })
});