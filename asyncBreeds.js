const fs = require('fs')

//intentional fail attempt using return

// const breedDetailsFromFile = function (breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   // Currently not returning anything from here, so breedDetailsFromFile function returns und.
// };

//attempt to get the return val
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); //should say undefined

//new attempt using callback(data) instead of return data



//pass in the cb 
const breedDetailsFromFile = (breed, cb) => {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data");

    if (error) cb(undefined);

    else cb(data);
  });
};

//callback function that will take breed from data once readfile is done
const callback = (breed) => console.log(breed);

breedDetailsFromFile('bombay', callback);

module.exports = { breedDetailsFromFile }
