

let existingTicket = localStorage.getItem("tickets");
if (existingTicket) {
    existingTicket = JSON.parse(existingTicket);
} else {
    existingTicket = { "Todo": [], "inProgress": [], "Completed": [] }; // Initialize all columns
}

let renderExistingTickets = () => {
    for (let key in existingTicket) {
        existingTicket[key].forEach((eachTicket) => {
            createTicketElement(eachTicket, key);
        });
    }
};

let createTicketElement = (ticketText, columnId) => {
    let div = document.createElement("div");
    div.setAttribute("draggable", "true");
    div.setAttribute("class", "ticket");
    let t = document.createTextNode(ticketText);

    div.appendChild(t);

    let column = document.getElementById(columnId);
    column.appendChild(div);

    attachDragEvents(div);
};

let ticketSubmitHandler = (event) => {
    event.preventDefault();

    const userInput = event.target.elements.ticketsText.value;

    let column = event.target.parentNode;
    const colTitle = column.children[0].innerText.trim();

    if (!existingTicket[colTitle]) {
        existingTicket[colTitle] = [];
    }
    existingTicket[colTitle].push(userInput);

    localStorage.setItem("tickets", JSON.stringify(existingTicket));

    createTicketElement(userInput, column.id);

    event.target.reset();
};

document
    .querySelectorAll('.addTicketForm')
    .forEach(eachForm => {
        eachForm.addEventListener('submit', ticketSubmitHandler);
    });

let onTheMoveElm = undefined;

let attachDragEvents = (ticketElm) => {
    ticketElm.addEventListener('mousedown', function (e) {
        onTheMoveElm = e.target;
    });
};

// Attach drag events to dynamically created tickets
document.querySelectorAll(".ticket").forEach(ticketElm => {
    attachDragEvents(ticketElm);
});

let allColumns = document.querySelectorAll(".column");

allColumns.forEach(columnElm => {
    columnElm.addEventListener("dragover", (event) => {
        event.preventDefault();
        if (event.target.className.includes("column")) {
            event.target.classList.add("column-dropable");
        }
    });

    columnElm.addEventListener("dragleave", (event) => {
        event.preventDefault();
        if (event.target.className.includes("column")) {
            event.target.classList.remove("column-dropable");
        }
    });

    columnElm.addEventListener('drop', function (event) {
        if (event.target.className.includes("column")) {
            let oldColumn = onTheMoveElm.parentElement.id;
            let newColumn = event.target.id;

            event.target.appendChild(onTheMoveElm);
            event.target.classList.remove("column-dropable");

            let ticketText = onTheMoveElm.innerText;

            existingTicket[oldColumn] = existingTicket[oldColumn];
            if (!existingTicket[newColumn]) {
                existingTicket[newColumn] = [];
            }
            existingTicket[newColumn].push(ticketText);

            localStorage.setItem("tickets", JSON.stringify(existingTicket));
        }
    });
});

renderExistingTickets();


//  Concept  of Local Storage 
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


