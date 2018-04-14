let addTwoNumbers = (a,b) => {
  return a+b;
}

let squareNumber = (a) => {
  return a**2
}

let addTwoNumbersAsync = (a,b,callback) => {
  setTimeout(() => {
    callback(a+b);
  }, 1000)
}

let squareNumberAsync = (a,callback) => {
  setTimeout(() => {
    callback(a**2);
  }, 1000)
}
module.exports = {
  addTwoNumbers,
  squareNumber,
  addTwoNumbersAsync,
  squareNumberAsync
}
