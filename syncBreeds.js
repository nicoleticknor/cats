
//data in memory
const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent cmomunication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you've served them for dinner.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

// synchronous funtion to fetch a cat breed
const breedDetails = function (breed) {
  //simple return of value cuzzz synchronicity 2
  return catBreeds[breed];
};

//stores the return value in bombay
// const bombay = breedDetails("Bombay");
// console.log(bombay); //logger

module.exports = { breedDetails };
