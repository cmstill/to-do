import fs from 'fs/promises';

const testFile = './test.txt';

const fileWritePromise = async (data) => {
    return await fs.writeFile(testFile, data);
};
const fileReadPromise = async () => {
    return await fs.readFile(testFile, {encoding:'utf8', flag: 'r'});
};

const runLogic = async () => {
    await fileWritePromise('this is my test data');
    console.log(`\tfileContents (${testFile}) are : \n${await fileReadPromise()}`)
}

runLogic()