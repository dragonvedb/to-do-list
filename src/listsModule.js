export default (function () {
  const listOfLists = {};

  class List {
    constructor(title) {
      this.id = listOfLists.length + 1; // placeholder
      this.title = title;
      this.creationDate = new Date();
    }
  }

  const createList = (title) => {
    const newList = new List(title);
    listOfLists.push(newList);
  };

  const deleteList = null;
})();
