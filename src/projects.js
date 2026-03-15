import { addTodoElement, selectProject } from "./content.js";
import { addProjectOption } from "./projectSelector.js";
import displayProject from "./sidebar.js";

class Todo {

    completed=false;
    id=crypto.randomUUID();

    constructor(title, desc, dueDate, priority, notes) {
        this.title=title;
        this.desc=desc;
        this.dueDate=dueDate;
        this.priority=priority;
        this.notes=notes;
    }

    updateNotes = function(newNotes) {
        this.notes=newNotes;
    }
}

class Project {

    todoList=[];

    constructor(title, desc) {
        this.title=title;
        this.desc=desc;
    }

    addTodo = function(todo) {
        this.todoList.push(todo);
        console.log(this.title+" Todo list: "+this.todoList);
    }

    getTodos = function() {
        return this.todoList;
    }
}

const defaultProject = new Project("Default", "This is the default project.");

let projects = [];

let selectedProject=defaultProject;



function setSelectedProject(projectTitle) {
    let projectFound = projects.find((proj)=>proj.title===projectTitle);
    if (!projectFound) {
        throw Error("Project with title " + projectTitle + " doesn't exist.");
    }
    else {
        displayProject(projectFound);
        selectProject(projectFound);
        selectedProject=projectFound;

        console.log(projectFound);
    }
}

function addProject(title, desc) {
    projects.push(new Project(title,desc));
    addProjectOption(title);
    setSelectedProject(title);
}


function addTodo(title, desc, dueDate, priority, notes) {
    let newTodo = new Todo(title, desc, dueDate, priority, notes);
    selectedProject.addTodo(newTodo);

    console.log("Added to: "+ selectedProject.title);

    addTodoElement(newTodo);
}

addProject(defaultProject.title, defaultProject.desc);

export {Todo, Project, projects, selectedProject, setSelectedProject, addProject, addTodo};