function createTodoElement(todoObj) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    todoDiv.id=todoObj.id;

    const todoH1 = document.createElement("h1");
    todoH1.textContent=todoObj.title;

    const todoDesc = document.createElement("p");
    todoDesc.textContent="Description: " + todoObj.desc;

    const todoDue = document.createElement("p");
    todoDue.textContent="Due: " + todoObj.dueDate;

    const todoPriority = document.createElement("p");
    todoPriority.textContent="Priority: " + todoObj.priority;

    
    const todoDoneDiv = document.createElement("div");
    todoDoneDiv.classList.add("done-div")
    const todoDoneText = document.createElement("span");
    todoDoneText.textContent="Done";
    const todoDoneCheckbox = document.createElement("input");
    todoDoneCheckbox.type="checkbox";

    todoDoneDiv.appendChild(todoDoneText);
    todoDoneDiv.appendChild(todoDoneCheckbox);
    
    const todoNotes = document.createElement("textarea");


    todoNotes.name="notes";
    todoNotes.dataset.todoId=todoObj.id;
    todoNotes.textContent=todoObj.notes;


    todoDiv.appendChild(todoH1);
    todoDiv.appendChild(todoDesc);
    todoDiv.appendChild(todoDue);
    todoDiv.appendChild(todoDoneDiv);
    todoDiv.appendChild(todoNotes);

    return todoDiv;
}

export {createTodoElement};