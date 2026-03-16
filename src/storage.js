import {initializeProjects, Project, projects, setProjects, Todo} from "./projects.js";

function loadStorage() {
    if (storageAvailable("localStorage")) {
        console.log("Local storage available.");
        if (!localStorage.getItem("projectArray")) {
          console.log("Initializing storage.");
          initializeProjects();
          updateStorage();
        }
        else {
          console.log("Loading existing storage");
          const projectsString = localStorage.getItem("projectArray");
          console.log(projectsString);
          const projectArray = JSON.parse(projectsString);

          const processedProjects=[];

          for (const jsonProject of projectArray) {

            const project = projectFromJSONObject(jsonProject);

            processedProjects.push(project);

            console.log("Project: ", project);

          };

          setProjects(processedProjects);

        }
    } else {
        console.log("Local storage unavailable.");
    }
}

function updateStorage() {
  const projectsString = JSON.stringify(projects);

  console.log("Updating storage to: ", projectsString);

  localStorage.setItem("projectArray", projectsString);
}

function prepareProject(project) {
  // project.addTodo = Project.prototype.addTodo;
  // project.getTodos = Project.prototype.getTodos;

  console.log("This is the completed project: "+ project.getTodos);


  // Object.assign(project, Project.prototype);
  Object.setPrototypeOf(project, Project.prototype);


  console.log("This is the completed project: "+ project.getTodos);

  for (const todo of project.todoList) prepareTodo(todo);

  return project;

}

function prepareTodo(todo) {
  // todo.updateNotes=Todo.prototype.updateNotes;
  Object.assign(todo, Todo.prototype);
}


function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function projectFromJSONObject(jsonProject) {
  const project = new Project(jsonProject.title, jsonProject.desc);

  const projectTodoList = [];

  for (const todo of jsonProject.todoList) {
    projectTodoList.push(todoFromJSONObject(todo));
  }

  project.todoList=projectTodoList;

  return project;

}

function todoFromJSONObject(jsonTodo) {
  const todo = new Todo(
    jsonTodo.title, 
    jsonTodo.desc,
    jsonTodo.dueDate,
    jsonTodo.priority,
    jsonTodo.notes
  );

  return todo;
}

export {updateStorage, loadStorage};