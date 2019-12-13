const Fruits = require("./fruits-model.js");
const db = require("../data/dbConfig.js");

describe("fruits model", () => {
  describe("insert", () => {
    it("should insert a new fruit into the db", async () => {
      await Fruits.insert({ name: "pineapple" });
      await Fruits.insert({ name: "cosmic crisp apple" });

      const fruits = await db("fruits");
      expect(fruits).toHaveLength(2);
    });

    it("should return the fruit inserted", async () => {
      let fruit = await Fruits.insert({ name: "pineapple" });
      expect(fruit.name).toBe("pineapple");

      fruit = await Fruits.insert({ name: "cosmic crisp apple" });
      expect(fruit.name).toBe("cosmic crisp apple");
    });

    beforeEach(async () => {
      await db("fruits").truncate();
    });
  });
});
