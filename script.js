// let onTheMoveElm = undefined;

// allTickets = document.querySelectorAll(".ticket");

// allTickets.forEach(ticketElm => {
//     ticketElm.addEventListener('mousedown' , function (e) {
//         console.log("e.target.className : " ,e.target.className);
//         onTheMoveElm = e.target;
//     })
// });

// allColumns = document.querySelectorAll(".column");

// allColumns.forEach(columnElm => {

//     columnElm.addEventListener("dragover" , (event) => {

//         console.log("dragover", e.target.className)
//         event.preventDefault();
//         if(event.target.className === "column"){
//             event.target.classList.add("column-dropable")
//             // event.target.style.backgroundColor = "blue"
//         }
//     });

//     columnElm.addEventListener("dragleave" , (event) => {

//         console.log("drag Leave", e.target.className)
//         event.preventDefault();
//         if(event.target.className.includes("column")){
//             event.target.classList.remove("column-dropable")
//             // event.target.style.backgroundColor = "rgb(209, 138, 204)"
//         }
//     });

//     columnElm.addEventListener('drop' , function (event) {

//         console.log("drop event")
//         console.log("e.target.className : " ,e.target);
//         if(event.target.className.includes("column")){
//             event.target.classList.remove("column-dropable")
           
//         }

//         e.target.appendChild(onTheMoveElm)
//     })
// });

let onTheMoveElm = undefined;

// Select all tickets
const allTickets = document.querySelectorAll(".ticket");

allTickets.forEach(ticketElm => {
    ticketElm.addEventListener('mousedown', function (e) {
        console.log("e.target.className:", e.target.className);
        onTheMoveElm = e.target;
    });

    // Set draggable attribute to true
    ticketElm.setAttribute('draggable', true);

    // Add dragstart event to store the element being moved
    ticketElm.addEventListener('dragstart', function (e) {
        onTheMoveElm = e.target;
    });
});

// Select all columns
const allColumns = document.querySelectorAll(".column");

allColumns.forEach(columnElm => {

    columnElm.addEventListener("dragover", (event) => {
        console.log("dragover", event.target.className);
        event.preventDefault();
        if (event.target.className.includes("column")) {
            event.target.classList.add("column-dropable");
            // event.target.style.backgroundColor = "blue"
        }
    });

    columnElm.addEventListener("dragleave", (event) => {
        console.log("drag Leave", event.target.className);
        event.preventDefault();
        if (event.target.className.includes("column")) {
            event.target.classList.remove("column-dropable");
            // event.target.style.backgroundColor = "rgb(209, 138, 204)"
        }
    });

    columnElm.addEventListener('drop', function (event) {
        console.log("drop event");
        console.log("event.target.className:", event.target.className);
        if (event.target.className.includes("column")) {
            event.target.classList.remove("column-dropable");
        }

        event.target.appendChild(onTheMoveElm);
    });
});

localStorage.setItem("")

