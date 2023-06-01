import _ from "lodash";
import list from "./listsModule";
import event from "./eventsModule";
import "./styles.css";

window.cli = {
  newList(title, description) {
    event.emit("createList", title, description);
  },
  removeList(id) {
    event.emit("deleteList", id);
  },
  printLists() {
    const lists = list.getLists();
    const formattedList = lists.reduce(
      (acc, item) =>
        `${acc}#${item.id} | ${item.title} | ${item.description}\n`,
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
window.cli.newList("buy milk", "i llluvv milkkk");

window.cli.removeList(2);

window.cli.printLists();
