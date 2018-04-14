const expect = require("expect");

const calculator = require("./calculator");

describe("basic tests", () => {

  it("3 + 3 should equal 6", () => {
    expect(calculator.addTwoNumbers(3,3))
          .toBe(6)
          .toBeA("number");
  })

  it("3^2 should equal 9", () => {
    expect(calculator.squareNumber(3))
          .toBe(9)
          .toBeA("number");
  })

})


describe("async basic tests", () => {

  it("3 + 3 should equal 6", done => {
    calculator.addTwoNumbersAsync(3,3,(sum) => {

      expect(sum)
        .toBe(6)
        .toBeA("number");

      done();
    })
  })

  it("3^2 should equal 9", done => {
    calculator.squareNumberAsync(3,(res) => {

      expect(res)
        .toBe(9)
        .toBeA("number");

      done();
    })
  })

})
