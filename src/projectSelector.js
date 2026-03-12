import { projects, setSelectedProject } from "./projects";


const projectSelect = document.querySelector("#project-select");

function updateOptionList() {
    const projectTitles = projects.projects.map((proj)=>proj.title);
    clearOptionList();

    for (const projectTitle of projectTitles) {
        const option = createProjectOption(projectTitle);

        projectSelect.appendChild(option);
    }
}

function clearOptionList() {
    projectSelect.innerHTML="";
}

function addProjectOption(projectTitle) {
    projectSelect.add(projectTitle);
    projectSelect.value=projectTitle;
}

function createProjectOption(title) {
    const option = document.createElement("option");
    option.classList.add("project-option");
    option.value=title;
    option.textContent=title;

    return option;
}

projectSelect.addEventListener("change",(e)=>{
    setSelectedProject(this.value); // maybe change this if not working
});

export {addProjectOption};