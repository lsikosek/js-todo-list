import { addProject, setSelectedProject } from "./projects.js";
import { projectSelect } from "./projectSelector.js";


const newProjectDialog = document.querySelector(".new-proj-dia");

const newProjectForm = document.querySelector(".new-proj-dia form");
const newProjButton = document.querySelector("#new-proj-btn");

newProjButton.addEventListener("click",(e)=>{
    console.log("new proj button clicked");
    newProjectDialog.showModal();
});

newProjectForm.addEventListener("submit", (e)=>{
    const formData = new FormData(newProjectForm);
    const projTitle=formData.get("project_name");
    const projDesc=formData.get("project_description");
    
    addProject(projTitle,projDesc);
});


projectSelect.addEventListener("change",(e)=>{
    setSelectedProject(projectSelect.value);
});

