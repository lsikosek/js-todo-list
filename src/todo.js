import { removeTodo } from "./projects.js";

function createTodoElement(todoObj) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    todoDiv.id=todoObj.id;

    const todoH1 = document.createElement("h1");
    todoH1.textContent=todoObj.title;

    const todoDelBtn = document.createElement("button");
    todoDelBtn.classList.add("todo-del-btn");
    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");

    todoHeader.appendChild(todoH1);
    todoHeader.appendChild(todoDelBtn);

    const todoDesc = document.createElement("p");
    todoDesc.innerHTML="<span class=\"field-name\">Description:</span> " + todoObj.desc;

    const todoDue = document.createElement("p");
    todoDue.innerHTML="<span class=\"field-name\">Due:</span>" + todoObj.dueDate;

    const todoPriority = document.createElement("p");
    todoPriority.innerHTML="<span class=\"field-name\">Priority:</span> " + todoObj.priority;

    
    const todoDoneDiv = document.createElement("div");
    todoDoneDiv.classList.add("done-div")
    const todoDoneText = document.createElement("span");
    todoDoneText.innerHTML="<span class=\"field-name\">Done:</span>";
    const todoDoneCheckbox = document.createElement("input");
    todoDoneCheckbox.type="checkbox";
    todoDoneCheckbox.checked=todoObj.completed;

    todoDoneDiv.appendChild(todoDoneText);
    todoDoneDiv.appendChild(todoDoneCheckbox);
    
    const todoNotes = document.createElement("textarea");


    todoNotes.name="notes";
    todoNotes.dataset.todoId=todoObj.id;
    todoNotes.textContent=todoObj.notes;


    todoDiv.appendChild(todoHeader);
    todoDiv.appendChild(todoDesc);
    todoDiv.appendChild(todoDue);
    todoDiv.appendChild(todoPriority);
    todoDiv.appendChild(todoDoneDiv);
    todoDiv.appendChild(todoNotes);


    // Handle events

    todoDoneCheckbox.addEventListener("change", (e)=>{
        
        todoObj.completed=todoDoneCheckbox.checked;
        console.log("State of obj: ", todoObj.completed);
        console.log("State of checkbox: ", todoDoneCheckbox.checked);
    });

    todoNotes.addEventListener("focusout",(e)=>{
        todoObj.notes=todoNotes.value;
        console.log("State of obj: ", todoObj.notes);
        console.log("State of notes: ", todoNotes.value);
    });

    todoDelBtn.addEventListener("click",()=>{
        removeTodo(todoObj);
    });

    return todoDiv;
}

export {createTodoElement};