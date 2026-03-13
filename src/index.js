import "./styles.css";
import "./projects.js";
import "./eventManager.js";
import "./content.js";
import { addTodoElement } from "./content.js";
import { Todo } from "./projects.js";


addTodoElement(new Todo("todo", "todly do", "01-01-1999", "1", "none"));

