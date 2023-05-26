import pubSub from "./pubSub";

const toDoNotification = (toDo) => {
  console.log(
    `'${toDo.name}' has been added. It is a priority ${toDo.priority} matter due on ${toDo.dueDate}.`
  );
};

const toDoDesc = (toDo) => {
  console.log(`#${toDo.id} '${toDo.name}': ${toDo.description}`);
};

const toDoError = (toDo) => {
  console.log(
    `ERROR: Item #${toDo.id} named '${toDo.name}' failed to intitialize`
  );
};

const newToDo = {
  id: 12,
  name: "Buy milk",
  priority: "1",
  dueDate: "13.10.2023",
  description: "or mom gonna kil meeee",
};

pubSub.on("addToDo", toDoNotification);
pubSub.on("addToDo", toDoDesc);
pubSub.on("addToDo", toDoError);

// pubSub.off("addToDo", toDoError);

pubSub.emit("addToDo", newToDo);
