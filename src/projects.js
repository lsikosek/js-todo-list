import { addProjectOption } from "./projectSelector";

class Todo {

    completed=false;

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

    #todoList=[];

    constructor(title, desc) {
        this.title=title;
        this.desc=desc;
    }

    addTodo = function(todo) {
        todoList.push(todo);
    }

    getTodos = function() {
        return todoList;
    }
}

const defaultProject = new Project("Default", "This is the default project.");

let projects = [defaultProject];

let selectedProject=defaultProject;

function setSelectedProject(projectTitle) {
    let projectFound = projects.find((proj)=>proj.title===projectTitle);
    if (!projectFound) {
        throw Error("Project with title " + projectTitle + " doesn't exist.");
    }
    else selectedProject=projectFound;
}

function addProject(title, desc) {
    projects.push(new Project(title,desc));
    addProjectOption(title);
    setSelectedProject(title);
}

function addTodo(title, desc, dueDate, priority, notes) {
    let newTodo = new Todo(title, desc, dueDate, priority, notes);
    selectedProject.addTodo(newTodo);
}

export {Todo, Project, projects, selectedProject, setSelectedProject, addProject, addTodo};