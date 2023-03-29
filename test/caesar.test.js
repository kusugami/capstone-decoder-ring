// Write your tests here!
const { expect } = require("chai");
const  caesarModule  = require("../src/caesar");

describe("caesar", () => {
  it("should return false if shift is equal to 0", () => {
    const actual = caesarModule.caesar("Jojo's Bizarre Adventure", 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is above 25", () => {
    const actual = caesarModule.caesar("Jonathan Joestar", 38);
    const expected = false;
    expect(actual).to.equal(expected);
  });

   it("should return false if the shift is less than -25", () => {
     const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", -33);
     expect(actual).to.be.false;
   });

  it("should return the decoded message depending on the shift value", () => {
    const actual = caesarModule.caesar("amkzmb umaaiom!", 8, false);
    const expected = "secret message!";
    expect(actual).to.eql(expected);
  });

  it("should return the encoded message depending on the given shift value", () => {
    const actual = caesarModule.caesar("Secret message!", 8);
    const expected = "amkzmb umaaiom!";
    expect(actual).to.eql(expected);
  });

  it("should leave spaces as is", () => {
    const actual = caesarModule.caesar("Giorno Giovanna!", 8);
    const expected = " ";
    expect(actual.charAt(6)).to.equal(expected);
  });

  it("should leave special characters as is", () => {
    const actual = caesarModule.caesar("Star Platinum!", 8);
    const expected = "!";
    expect(actual.charAt(13)).to.equal(expected);
  });

  it("should wrap characters around when going over 'z'", () => {
    const actual = caesarModule.caesar("Za warudo!", 3);
    const expected = "cd zduxgr!";
    expect(actual).to.equal(expected);
  });

  it("should ignore capitalization of letters", () => {
    const actual = caesarModule.caesar("Hello", 2);
    const expected = "jgnnq";
    expect(actual).to.eql(expected);
  });

  it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("Caesar Zeppeli");
    expect(actual).to.be.false;
  });
});