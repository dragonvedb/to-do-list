import _ from "lodash";
import event from "./eventsModule";

export default (function () {
  let idGenerator = 0;

  const listOfToDos = [];

  class ToDo {
    constructor(title, description, dueDate, priority, list) {
      this.id = idGenerator++; // placeholder
      this.creationDate = new Date();
      this.title = title || "To-Do";
      this.description = description || null;
      this.dueDate = dueDate || null;
      this.priority = priority;
      this.list = list || null;
    }
  }

  const createToDo = (title, description, dueDate, priority, list) => {
    const newToDo = new ToDo(title, description, dueDate, priority, list);
    listOfToDos.push(newToDo);
    if (newToDo.list) {
      event.emit("addToDo", list, newToDo);
    }
  };

  const deleteToDo = (id) => {
    const toDoToKill = listOfToDos.find((toDo) => toDo.id === id);
    _.pull(listOfToDos, toDoToKill);
    if (toDoToKill.list) {
      event.emit("addToDo", toDoToKill.list, toDoToKill.id);
    }
  };

  const updateToDo = (id, title, description, dueDate, priority) => {
    const toDoToUpdate = listOfToDos.find((toDo) => toDo.id === id);
    if (title) toDoToUpdate.title = title;
    if (description) toDoToUpdate.description = description;
    if (dueDate) toDoToUpdate.dueDate = dueDate;
    if (priority) toDoToUpdate.priority = priority;
  };

  event.on("createToDo", createToDo);
  event.on("deleteToDo", deleteToDo);
  event.on("updateToDo", updateToDo);
})();
