import _ from "lodash";
import list from "./listsModule";
import event from "./eventsModule";
import "./styles.css";

window.cli = {
  newList(title, description) {
    event.emit("createList", title, description);
  },
  removeList(i) {
    const lists = list.getLists();
    event.emit("deleteList", lists[i - 1].id);
  },
  updateList(i, title, description) {
    const lists = list.getLists();
    event.emit("updateList", lists[i - 1].id, title, description);
  },
  printLists() {
    const lists = list.getLists();
    const formattedList = lists.reduce(
      (acc, item, index) =>
        `${acc}#${index + 1} | ${item.title} | ${item.description || ""}\n`,
      "List of lists:\n\n"
    );

    console.log(formattedList);
  },
};

window.cli.newList("shopping", "");
window.cli.newList("Game Dev", "List of all the major milestones to release");
window.cli.newList(
  "cleaning rooms",
  "so i never forget to vacuum under the counter again"
);
window.cli.newList("", "i llluvv milkkk");

window.cli.updateList(2, "Video Game", "lets do this");

window.cli.printLists();
