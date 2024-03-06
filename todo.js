import yargs from 'yargs';
import { readFile, writeFile, appendFile } from 'fs/promises';
import { toDoArr, addToDo, deleteToDo, listToDos } from './utility.js';
import ToDo from './toDoClass.js';

const {
  add, file, deleteFromList, list,
} = yargs(process.argv.slice(2))
  .scriptName('todo')
  .usage('Usage: $0 --add a --file f --deleteToDo d --list l --help h')
  .example('$0 --add to-do to add --file file to store to-dos --delete to-do ID --list file to list from --help')//this needs to work on copy/paste
  .option('a', {
    alias: 'add',
    describe: 'adds one or more to-dos to a file',
    type: 'string',
  })
  .option('f', {
    alias: 'file',
    describe: 'denotes file to store to-dos to',
    // demandOption: 'the name of the to-do list you want to work with is required',
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

// async code to create a new file

const createFile = async (fileName) => {
  try {
    await writeFile(fileName, '', { encoding: 'utf8' });
    console.log(`${file} was successfully created`);
  } catch (ex) {
    console.error(`Error creating the file: ${ex}`);
  }
};

// file needs to be .json?*** could this be where we convert to JSON?

if (file) {
  await createFile(file);
}

// code to add new todo to file with -a and -f

if (add && file) {
  addToDo(add);
  writeFile(file, add)
}

if (deleteFromList) {
  deleteToDo(deleteFromList);
}

// const jsonToDos = JSON.stringify(toDos, null, 2);

console.log(toDoArr);
if (list) {
  listToDos();
}

// }

console.log(toDoArr);

// I need to get my toDoArr to the file I create with file command
