import yargs from 'yargs';
import fs from 'fs/promises';
import {
  addToDo, deleteToDo, listToDos, toDoArr,
} from './utility.js';
import ToDo from './toDoClass.js';

const {
  add, file, deleteFromList, list,
} = yargs(process.argv.slice(2))
  .scriptName('todo')
  .usage('Usage: $0 --add a --file f --deleteToDo d --list l --help h')
  .example('$0 --add study javascript --file "./monday" --delete 212 --list no input but requires file to list from with --file --help')// this needs to work on copy/paste
  .option('a', {
    alias: 'add',
    describe: 'adds one or more to-dos to a file',
    type: 'string',
  })
  .option('f', {
    alias: 'file',
    describe: 'denotes file to store to-dos to',
    demandOption: 'the name of the to-do list you want to work with is required',
    type: 'string',
  })
  .option('d', {
    alias: 'deleteFromList',
    describe: 'deletes to-do from to-do list according to provided ID number',
    type: 'number',
  })
  .option('l', {
    alias: 'list',
    describe: 'lists todos',
  })// may have to use "if list === undefined, then run the list funciton because I am "
  .showHelpOnFail()
  .parse();

// add file logic

if (file && add) {
  let fileExists = true;
  try {
    await fs.stat(file);
  } catch (ex) {
    fileExists = false;
  }

  if (fileExists) {
    const fileContents = await fs.readFile(file, { encoding: 'utf8', flag: 'r' });
    toDoArr.length = 0;
    toDoArr.push(...JSON.parse(fileContents));
    // const toDoArr = JSON.parse(fileContents);
    addToDo(add);
    await fs.writeFile(file, JSON.stringify(toDoArr));
  } else {
    addToDo(add);
    await fs.writeFile(file, JSON.stringify(toDoArr));
  }
}

// deleteFromList logic

if (deleteFromList && file) {
  try {
    const fileContents = await fs.readFile(file, { encoding: 'utf8', flag: 'r' });
    const parsedToDos = JSON.parse(fileContents);
    toDoArr.length = 0;
    toDoArr.push(...parsedToDos);
    deleteToDo(deleteFromList);
    await fs.writeFile(file, JSON.stringify(fileContents));
  } catch (ex) {
    console.error('No file with that name exists');
  }
}

// list logic

if (list && file) {
  try {
    const fileContents = await fs.readFile(file, { encoding: 'utf8', flag: 'r' });
    const todosFromFile = JSON.parse(fileContents);
    toDoArr.length = 0;
    toDoArr.push(...todosFromFile);
    listToDos();
  } catch (ex) {
    console.error('No file with that name exists');
  }
}
