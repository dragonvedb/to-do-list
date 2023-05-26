import _ from "lodash";

const pubSub = {
  events: {},

  on(eventName, fn) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(fn);
  },

  off(eventName, fn) {
    if (this.events[eventName]) {
      _.pull(this.events[eventName], fn);
    }
  },

  emit(eventName, ...data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => fn(...data));
    }
  },
};

export default pubSub;
