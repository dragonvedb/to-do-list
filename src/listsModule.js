import _ from "lodash";
import event from "./eventsModule";

export default (function () {
  const listOfLists = [];

  class List {
    constructor(title, description) {
      this.id = listOfLists.length + 1; // placeholder
      this.creationDate = new Date();
      this.title = title;
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

  const getLists = () => listOfLists;

  event.on("createList", createList);
  event.on("deleteList", deleteList);

  return {
    getLists,
  };
})();
