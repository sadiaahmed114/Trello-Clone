    let existingTicket = localStorage.getItem("tickets");
    if(existingTicket){
        existingTicket = JSON.parse(existingTicket)
    }else{
        existingTicket= {};
    }

    let renderExistingTickets = () => {

        for(let key in existingTicket){
            console.log("key" , key);

            // console.log(existingTicket[key])
            existingTicket[key].forEach((eachTicket , index) =>{
            // create tickets 
            let div = document.createElement("div");
            div.setAttribute("draggable" , "true");
            div.setAttribute("class" , "ticket");
            let t = document.createTextNode(eachTicket);
        
            div.appendChild(t);

            let column = document.getElementById(key);
            column.appendChild(div)
            })
        }
    }
    renderExistingTickets()


    let ticketSubmitHandler = (event) => {
        event.preventDefault();

        // let userInput = document.querySelector('[name="ticketText"]').value;
        const userInput = event.target.elements.ticketText.value;

        // console.log(userInput);

        let div = document.createElement("div");
        div.setAttribute("draggable" , "true");
        div.setAttribute("class" , "ticket");
        let t = document.createTextNode(userInput);

        div.appendChild(t);

        let column = event.target.parentNode;
        console.log("column:" , column);

        column.insertBefore(div , event.target)

        console.log(event.target.parentNode.children[0].innerText);
        const colTitle = event.target.parentNode.children[0].innerText
        if(!existingTicket[colTitle]){
            existingTicket[colTitle] = [];
        }
        existingTicket[colTitle].push(userInput);

        localStorage.setItem("tickets" ,JSON.stringify(existingTicket));

        event.target.reset();

        console.log("submit");
    };

    document
    .querySelectorAll('.addTicketForm')
    .forEach(eachForm =>{
        eachForm.addEventListener('submit' , ticketSubmitHandler);
    })

    //     event.preventDefault();

    //     let userInput = document.querySelector('[name="ticketText"]').value;

    //     let div = document.createElement("div")
    //     div.setAttribute("draggable" , "true")
    //     div.setAttribute("class" , "ticket")
    //     let t = document.createTextNode(userInput);

    //     div.appendChild(t);

    //     let column = event.target.parentNode;
    //     console.log("column:" , column);

    //     column.insertBefore(div , event.target)

    //     if(!existingTicket["todo"]){
    //         existingTicket.todo = [];
    //     }
    //     existingTickets.todo.push(userInput);

    //     localStorage.set("tickets" ,JSON.stringify(existingTickets));

    //     event.target.reset();

    //     console.log("submit");
    // });
    // let a ={
    //     "todo" : ["task1" , "task2" , "task3"],
    //     "inProgress" :["task1"]
    // }
let onTheMoveElm = undefined;

// Select all tickets
let allTickets = document.querySelectorAll(".ticket");

allTickets.forEach(ticketElm => {
    ticketElm.addEventListener('mousedown', function (e) {
        console.log("e.target.className:", e.target.className);
        onTheMoveElm = e.target;
    });

    // // Set draggable attribute to true
    // ticketElm.setAttribute('draggable', true);

    // // Add dragstart event to store the element being moved
    // ticketElm.addEventListener('dragstart', function (e) {
    //     onTheMoveElm = e.target;
    // });
});

// Select all columns
let allColumns = document.querySelectorAll(".column");

allColumns.forEach(columnElm => {

    columnElm.addEventListener("dragover", (event) => {
        console.log("dragover", event.target.className);
        event.preventDefault();
        if (event.target.className ==="column") {
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
            event.target.appendChild(onTheMoveElm);
            event.target.classList.remove("column-dropable");
        }

        // event.target.appendChild(onTheMoveElm);
    });
});
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


