import { checkStatus, filter } from "./helpers";

describe("check status method", () => {
  test("status 199 returns error", () => {
    const obj = { status: 199 };
    expect(() => checkStatus(obj)).toThrowError();
  });
  test("status 200 returns success", () => {
    const obj = { status: 200 };
    expect(() => checkStatus(obj)).not.toThrowError();
  });
  test("status 201 returns success", () => {
    const obj = { status: 201 };
    expect(() => checkStatus(obj)).not.toThrowError();
  });
  test("status 399 returns success", () => {
    const obj = { status: 399 };
    expect(() => checkStatus(obj)).not.toThrowError();
  });
  test("status 400 returns error", () => {
    const obj = { status: 400 };
    expect(() => checkStatus(obj)).toThrowError();
  });
  test("status 401 returns error", () => {
    const obj = { status: 401 };
    expect(() => checkStatus(obj)).toThrowError();
  });
});

describe("method filter", () => {
  test("to match specific attribute", () => {
    const string = "abc";
    const arr = [{ login: "abcdef" }, { login: "fghijk" }];
    expect(filter(string, arr)).toEqual([{ login: "abcdef" }]);
  });
  test("to return the right value", () => {
    const string = "abc";
    const arr = [{ login: "abcdef" }, { login: "fghijk" }];
    expect(filter(string, arr)).not.toEqual([{ login: "fghijk" }]);
  });
});

// otestovat všechny usecasy - DONE
// otestovat komponenty - asi DONE
// otestovat fetch pomocí nocku - DONE
// vytvorit si repo pro tenhle projekt DONE
//
