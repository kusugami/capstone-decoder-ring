// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

//UNFINISHED: Needed encoded stuff

describe("polybius", () => {
   it("should encode a message by translating each letter to each pair of numbers", () => {
     const actual = polybiusModule.polybius("thinkful"); 
     const expected = "4432423352125413";
    expect(actual).to.eql(expected);
   });
   it("should translate i & j to 42", () => {
    const actual = polybiusModule.polybius("joseph joestar");
    const expected = "424334515332 42435134441124";
    expect(actual).to.eql(expected);
   })
   it("should preserve spaces while encoding", () => {
    const actual = polybiusModule.polybius("Oingo boingo brothers");
    const expected = "4342332243 214342332243 2124434432512434";
    expect(actual).to.eql(expected);
   })
   it("should ignore capitalized letters", () => {
    const actual = polybiusModule.polybius("Jolyne Kujo");
    const expected = "424313453351 52544243";
    expect(actual).to.eql(expected);
   })
   it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybiusModule.polybius("42434243 245112512451333151", false);
    const expected = "(i/j)o(i/j)o reference";
    expect(actual).to.equal(expected);
   })
   it("should preserve spaces while decoding", () => {
    const actual = polybiusModule.polybius(
      "33544451131311 4234 431551242411445141",
      false
    );
    const expected = "nutella (i/j)s overrated";
    expect(actual).to.equal(expected);
   })
   it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("42434243", false); 
     const expected = "(i/j)o(i/j)o";
    expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("jojo"); 
     const expected = "42434243";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the number of characters in the string sans spaces is not even", () => {
    const actual = polybiusModule.polybius("443", false);
    expect(actual).to.be.false;
  });
}); 