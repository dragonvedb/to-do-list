import _ from "lodash";
import event from "./eventsModule";

export default (function () {
  let idGenerator = 0;

  const listOfLists = [];

  class List {
    constructor(title, description) {
      this.id = idGenerator++; // placeholder
      this.creationDate = new Date();
      this.title = title || "New List";
      this.description = description || null;
      this.toDo = [];
    }
  }

  const createList = (title, description) => {
    const newList = new List(title, description);
    listOfLists.push(newList);
  };

  const deleteList = (id) => {
    _.remove(listOfLists, (list) => list.id === id);
  };

  const updateList = (id, title, description) => {
    const listToUpdate = listOfLists.find((list) => list.id === id);
    if (title) listToUpdate.title = title;
    if (description) listToUpdate.description = description;
  };

  const addToDo = (listId, toDo) => {
    const parentList = listOfLists.find((list) => list.id === listId);
    parentList.toDo.push(toDo);
  };

  const removeToDo = (listId, toDoId) => {
    const parentList = listOfLists.find((list) => list.id === listId);
    _.remove(parentList, (toDo) => toDo.id === toDoId);
  };

  const getLists = () => listOfLists;

  event.on("createList", createList);
  event.on("deleteList", deleteList);
  event.on("updateList", updateList);
  event.on("addToDo", addToDo);
  event.on("removeToDo", removeToDo);

  return {
    getLists,
  };
})();
