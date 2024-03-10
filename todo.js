import yargs from 'yargs';
import fs from 'fs/promises'; //maybe append to file here was important...a way around the roadblock that is hiding in here
import { toDoArr, addToDo, deleteToDo, listToDos } from './utility.js';
import ToDo from './toDoClass.js';

const {
  add, file, deleteFromList, list,
} = yargs(process.argv.slice(2))
  .scriptName('todo')
  .usage('Usage: $0 --add a --file f --deleteToDo d --list l --help h')
  .example('$0 --add study javascript --file "./monday" --delete 212 --list no input but requires file to list from with --file --help')//this needs to work on copy/paste
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

// async code to create a new file

// const createFile = async (fileName) => {
//   try {
//     await fs.writeFile(fileName, toDoArr, { encoding: 'utf8' });
//     console.log(`${file} was successfully created`);
//   } catch (ex) {
//     console.error(`Error creating the file: ${ex}`);
//   }
// };



if (file && add) {
  if (fs.existsSync(file)) {
    fs.readFile(file);
    addToDo(add);
  }
} else {
  try {
    await fs.writeFile(file, ToDo.newArr);
    addToDo(add);
  } catch (ex) {
    console.error(ex);
  }
}

// code to add new todo to file with -a and -f

if (deleteFromList) {
  deleteToDo(deleteFromList);
}

// const jsonToDos = JSON.stringify(toDos, null, 2);

// list funtionality.  this seems to work

if (list && file) {
  try {
    await fs.readFile(file);
    listToDos();
  } catch (ex) {
    console.error('No file with that name exists');
  }
}

// }

// I need to get my toDoArr to the file I create with file command

// async function readToDosFromFile(filePath) {
//   try {
//     const data = await fs.readFile(filePath, { encoding: 'utf8' });
//     return JSON.parse(data);
//   } catch (error) {
//     // If the file doesn't exist, return an empty array
//     if (error.code === 'ENOENT') {
//       return [];
//     } else {
//       throw error;
//     }
//   }
// }

// async function writeToDosToFile(filePath, toDoArr) {
//   const data = JSON.stringify(toDoArr, null, 2);
//   await fs.writeFile(filePath, data, { encoding: 'utf8' });
// }