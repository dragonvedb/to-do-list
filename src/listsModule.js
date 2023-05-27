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
    }
  }

  const createList = (title, description) => {
    const newList = new List(title, description);
    listOfLists.push(newList);
  };

  const deleteList = (list) => {
    _.pull(listOfLists, list);
  };

  const getLists = () => listOfLists;

  event.on("createList", createList);
  event.on("deleteList", deleteList);

  return {
    getLists,
  };
})();
