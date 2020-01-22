const store = require("./class-store");

test("push new data into file store", () => {
  let data = { name: "test name", age: "25" };
  expect(typeof store.create(data)).toBe("object");
});

test("list all data from file store", () => {
  expect(typeof store.get()).toBe("object");
});

test("get particular data by key", () => {
  expect(typeof store.getByKey("c49d672b631f460993ec292bcc7703fc")).toBe(
    "object"
  );
});

test("update particular data by key", () => {
  expect(
    typeof store.update("c49d672b631f460993ec292bcc7703fc", {
      name: "satheesh",
      age: 29
    })
  ).toBe("object");
});

test("delete particular data by key", () => {
  expect(typeof store.delete("c49d672b631f460993ec292bcc7703fc")).toBe(
    "object"
  );
});
