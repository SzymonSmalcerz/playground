const calculator = require("./calculator");

it("3 + 3 should equal 6", () => {
  return calculator.addTwoNumbers(3,3) === 6;
})

it("3^2 should equal 9", () => {
  return calculator.squareNumber(3) === 9;
})
