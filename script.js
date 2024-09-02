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

    let existingTicket = localStorage.getItem("tickets");
    if(existingTicket){
        existingTicket = JSON.parse(existingTicket)
    }else{
        existingTicket= {};
    }

    document
    .querySelector('.addTicketForm')
    .addEventListener('submit' , (event) => {
        event.preventDefault();

        let userInput = document.querySelector('[name="ticketText"]').value;

        let div = document.createElement("div")
        div.setAttribute("draggable" , "true")
        div.setAttribute("class" , "ticket")
        let t = document.createTextNode(userInput);

        div.appendChild(t);

        let column = event.target.parentNode;
        console.log("column:" , column);

        column.insertBefore(div , event.target)

    // let existingTickets = localStorage.getItem("tickets");
    // if(existingTickets){
    //     existingTickets = JSON.parse(existingTickets)
    // }else{
    //     existingTickets= [];
    // }
        // if()
        existingTickets.todo.push(userInput);

        localStorage.set("tickets" ,JSON.stringify(existingTickets));

        event.target.reset();

        console.log("submit");
    });
    let a ={
        "todo" : ["task1" , "task2" , "task3"],
        "inProgress" :["task1"]
    }
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

// ******* _____________________ ******************
// localStorage.setItem("abchj" , "some value");

// let value = localStorage.getItem("obj2");

// console.log("value" , value);

// let student ={
//     name : "Ayan",
//     roll : 23,
//     isActive : true,
//     campus : "Math"
// }

// let isActive = true ;
// let student_str = JSON.stringify(isActive);
// console.log("student_str" , student_str);

// localStorage.setItem("student_str" , student_str);

// student_str = localStorage.getItem("student");
// console.log("student_str" , student_str);

// student = JSON.parse(student_str);
// console.log(student.campus);


