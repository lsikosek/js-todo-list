class Todo {

    complete=false;

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

export {Todo, Project};