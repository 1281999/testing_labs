const capitalizeText = (input) => {
    if (typeof input !== "string"){
      throw new TypeError("Plz enter only string")
    };
    return input.toUpperCase();
  };
  

module.exports={
    capitalizeText
}
////////////////problem 2
const createArray = (number) => {
    const myArray = Array.from(Array(number).keys());
    return myArray;
  };
  

  
module.exports={
    createArray
}