

const sidebar = document.querySelector(".sidebar");

const projectName = document.querySelector(".project-name");
const projectDesc = document.querySelector(".project-desc");

function displayProject(proj) {
    projectName.textContent = proj.title;
    projectDesc.textContent = proj.desc;
}

export default displayProject;