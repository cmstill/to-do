import ToDo from './toDoClass.js';

export let toDoArr = [];

// adding functionality: supports adding one to-do at a time

export const addToDo = (todo) => {
  const newToDo = new ToDo(todo);
  toDoArr.push(newToDo);
};

// list functionality: iterates through toDoArr and then console.logs all the ToDos and their IDs

export const listToDos = () => {
  toDoArr.forEach((todo) => {
    console.log(`Name: ${todo.name}, ID ${todo.ID}`);
  });
};

// delete functionality: deletes todo according to provided ID#

export const deleteToDo = (id) => {
  const stringID = String(id);
  const newArr = toDoArr.filter((todo) => todo.ID !== stringID);
  toDoArr = newArr;
};
