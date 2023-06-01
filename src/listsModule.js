import _ from "lodash";
import event from "./eventsModule";

export default (function () {
  const listOfLists = [];

  class List {
    constructor(title, description) {
      this.id = listOfLists.length + 1; // placeholder
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
    const listToKill = listOfLists.find((list) => list.id === id);
    _.pull(listOfLists, listToKill);
  };

  const updateList = (id, title, description) => {
    const listToUpdate = listOfLists.find((list) => list.id === id);
    if (title) listToUpdate.title = title;
    if (description) listToUpdate.description = description;
  };

  const getLists = () => listOfLists;

  event.on("createList", createList);
  event.on("deleteList", deleteList);
  event.on("updateList", updateList);

  return {
    getLists,
  };
})();
