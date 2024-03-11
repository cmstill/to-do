import ToDo from './toDoClass.js'

export let toDoArr = [];

//adding functionality, supports adding one to-do at a time:

export const addToDo = (todo) => {
  const newToDo = new ToDo(todo);
  toDoArr.push(newToDo);
};

//list functionalitly...function thatiterates through toDoArr and then console.logs all the ToDos and their IDs...stringify? 

export const listToDos = () => {
  toDoArr.forEach((todo) => {
    console.log(`Name: ${todo.name}, ID ${todo.ID}`);
  });
};

//functionality to delete todo according to provided ID

export const deleteToDo = (id) => {
  let newArr = toDoArr.filter((todo) => todo.ID !== id);
  toDoArr = newArr;
};

