// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
  it("should encode a message", () => {
    const actual = substitutionModule.substitution(
      "jotaro",
      "qwertyuiopasdfghjklzxcvbnm"
    );
    const expected = "pgzqkg";
    expect(actual).to.eql(expected);
  });
  it("should encode a message that has spaces in it", () => {
    const actual = substitutionModule.substitution(
      "You thought it was code, but it was me! Dio!",
      "qwertyuiopasdfghjklzxcvbnm"
    );
    const expected = "ngx zigxuiz oz vql egrt wxz oz vql dt rog";
    expect(actual).to.eql(expected);
  });
  it("should ignores capital letters", () => {
    const actual = substitutionModule.substitution(
      "Golden Wind",
      "qwertyuiopasdfghjklzxcvbnm"
    );
    const expected = "ugsrtf vofr";
    expect(actual).to.eql(expected);
  });
  it("should decode a message", () => {
    const actual = substitutionModule.substitution(
      "y&ii$r&",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
    const expected = "message";
    expect(actual).to.eql(expected);
  });
  it("should decode a message that has spaces in it", () => {
    const actual = substitutionModule.substitution("zit hossqk dtf",
     "qwertyuiopasdfghjklzxcvbnm", false);
    const expected = "the pillar men";
    expect(actual).to.eql(expected);
  });
  it("should return false if the alphabet parameter isn't exactly 26 characters", () => {
    const actual = substitutionModule.substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  it("should return false if the alphabet parameter has duplicate characters", () => {
    const actual = substitutionModule.substitution("thinkful", "shhorrt");
    expect(actual).to.be.false;
  });
});