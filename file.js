import fs from 'fs/promises';
import { toDoArr } from './utility.js';

// this is writing data do a file
await fs.writeFile('./testfile.js', JSON.stringify(toDoArr)); // first arg is path name, second arg is what data we're writing

// reading data out of a file

const todos = await fs.readFile('./testfile.js', { encoding: 'utf8', flag: 'r' }); // first argument is file path I want to read from, second is an object that tells computer how to encode file contents.  then the output of this reading is saved to a varibale so we can log it

console.log(todos);

// have to use await here because writeFile and readFile both are asyncrounous and so return promise