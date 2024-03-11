
// if a function is marked "async" then, conceptually, the code "pauses" at that line until a promise resolves or rejects

const varibaleSecondPromise = (seconds) => new Promise((resolve, reject) => setTimeout(resolve, seconds * 1000, seconds));

// the above function returns a promise to resolve or reject based on the result of the function setTimeout?

const executePromisesWithAwait = async () => {
  const oneSec = await varibaleSecondPromise(1);
  console.log(`Result of one second promise was ${oneSec}`); // this line will not execute until the promise in line 10 resolves/rejects

  const twoSec = await varibaleSecondPromise(2);
  console.log(`Result of two second promise was ${twoSec}`);
};

executePromisesWithAwait();
// await keyword is the keyword that lets us treat our code like asynchrnous code
// await kind of does the same thing that .then does so 
    // in the example above:  AWAIT the promise variableSecondPromise and 
    // (implied .then) console.log(the text provided on line 9)

//fs.writeFile and fs.readFile IMPLICITLY RETURN PROMISES..THEY ARE ASYNC FUNCTIONS THAT NEED TO BE AWAITED


//try-catch

try {
    console.log('I am about to throw an exception...');
    throw new Error('Told you so');
    console.log('I will never executre due to the exception above');
} catch (ex) {
    console.error(`Error!  An exception was thrown with value: ${ex}`);
}
