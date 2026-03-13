import { newTodoButton } from "./content.js";
import { addProject, setSelectedProject } from "./projects.js";
import { projectSelect } from "./projectSelector.js";


const newProjectDialog = document.querySelector(".new-proj-dia");

const newProjectForm = document.querySelector(".new-proj-dia form");
const newProjButton = document.querySelector("#new-proj-btn");

const newTodoDialog = document.querySelector(".new-todo-dia");
const newTodoForm = document.querySelector(".new-todo-dia form");

const newTodoPriorityRange = document.querySelector("#todo-priority");
const newTodoPriorityRangeCounter = document.querySelector("#todo-priority-counter");

newProjButton.addEventListener("click",(e)=>{
    console.log("new proj button clicked");
    newProjectDialog.showModal();
});

newProjectForm.addEventListener("submit", (e)=>{
    const formData = new FormData(newProjectForm);
    const projTitle=formData.get("project_name");
    const projDesc=formData.get("project_description");

    newProjectForm.reset();
    
    addProject(projTitle,projDesc);
});

projectSelect.addEventListener("change",(e)=>{
    setSelectedProject(projectSelect.value);
});

newTodoButton.addEventListener("click", (e)=>{
    newTodoDialog.showModal();
});

newTodoForm.addEventListener("submit",(e)=>{
    const formData = new FormData(newTodoForm);

});

// Make priority range display the number
newTodoPriorityRangeCounter.textContent=newTodoPriorityRange.value;

newTodoPriorityRange.addEventListener("input", ()=>{
    newTodoPriorityRangeCounter.textContent=newTodoPriorityRange.value;
});
