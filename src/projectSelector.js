

const projectSelect = document.querySelector("#project-select");



function addProjectOption(projectTitle) {
    const projectOpt = document.createElement("option");
    projectOpt.classList.add("project-option");
    projectOpt.textContent=projectTitle;
    projectSelect.add(projectOpt);
    projectSelect.value=projectTitle;
}

function createProjectOption(title) {
    const option = document.createElement("option");
    option.classList.add("project-option");
    option.value=title;
    option.textContent=title;

    return option;
}



export {addProjectOption, projectSelect};