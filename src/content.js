import { Todo } from "./projects.js";
import { createTodoElement } from "./todo.js";

const contentDiv = document.querySelector("#content");

const newTodoButton = document.createElement("button");
newTodoButton.id="new-todo-btn";

function clearContent() {
    contentDiv.replaceChildren(newTodoButton);
}

function selectProject(project) {
    clearContent();

    const todos=project.getTodos();

    for (const todo of todos) {
        addTodoElement(todo);
    }
}


function addTodoElement(todo) {
    const newTodo = createTodoElement(todo);
    contentDiv.insertBefore(newTodo,newTodoButton);

}



contentDiv.appendChild(newTodoButton);

export {newTodoButton,addTodoElement, selectProject};