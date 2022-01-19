import { encypher } from "./Helper";

describe("encypher pass phrase", ()=>{
    it("doesn't encypher the phrase", ()=>{
        expect(encypher("hi im a function that returns my string arg")).toBe("hi im a function that returns my string arg");
    })
})