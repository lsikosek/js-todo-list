import { addTodoElement, selectProject } from "./content.js";
import { addProjectOption } from "./projectSelector.js";
import displayProject from "./sidebar.js";
import { loadStorage, updateStorage } from "./storage.js";

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

    // delete = function() {
    //     this
    // }
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

        updateStorage();
    }

    getTodos = function() {
        return this.todoList;
    }

    removeTodo = function(todo) {
        const todoFoundIndex = this.todoList.findIndex((el)=>el.id=todo.id);

        if (todoFoundIndex<0) {
            throw Error("Cannot remove todo "+todo.title+": not found in "+this.title+" project.");
        }
        else {
            this.todoList.splice(todoFoundIndex,1);
            updateStorage();
        }
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

    updateStorage();
}


function addTodo(title, desc, dueDate, priority, notes) {
    let newTodo = new Todo(title, desc, dueDate, priority, notes);
    selectedProject.addTodo(newTodo);

    console.log("Added to: "+ selectedProject.title);

    addTodoElement(newTodo);
}

function removeTodo(todo) {
    selectedProject.removeTodo(todo);
    selectProject(selectedProject);
}

function setProjects(projectArray) {
    projects=projectArray;
    projects.map((proj)=>proj.title).forEach((projTitle)=>addProjectOption(projTitle));
    setSelectedProject("Default");
}

function initializeProjects() {
    addProject(defaultProject.title, defaultProject.desc); // this is ruinging persistant storage
    addTodo("todo", "todly do", "01-01-1999", "1", "none");
}


loadStorage();

export {Todo, Project, projects, selectedProject, setSelectedProject, addProject, addTodo, setProjects, initializeProjects, removeTodo};