import pubSub from "./pubSub";

const hello = (id1, id2) => {
  console.log(`HI, ${id1} and ${id2}`);
};

const crime = (id1, id2) => {
  console.log(`${id1} stole money from ${id2}`);
};

const movie = (id1, id2) => {
  console.log(`${id1} and ${id2} watched a movie together`);
};

pubSub.on("test", hello);
pubSub.on("test", crime);
pubSub.on("test", movie);

pubSub.off("test", crime);

pubSub.emit("test", "Daniel", "George");
