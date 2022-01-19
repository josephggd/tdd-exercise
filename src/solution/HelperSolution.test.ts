import { encypher } from "./HelperSolution";

describe("encypher pass phrase", () => {
  it("changes every r to n", () => {
    expect(encypher("read")).toBe("nead");
  });
  it("changes every s to a", () => {
    expect(encypher("sect")).toBe("aect");
  });
  it("deletes second+ e", () => {
    expect(encypher("peek")).toBe("pek");
  });
  it("changes second+ t to m", () => {
    expect(encypher("tooth")).toBe("toomh");
  });
  it("changes every ph to lo", () => {
    expect(encypher("phobia")).toBe("loobia");
  });
});
