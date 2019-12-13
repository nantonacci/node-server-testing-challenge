const db = require("../data/dbConfig.js");

module.exports = {
  insert
};

async function insert(fruit) {
  const [id] = await db("fruits").insert(fruit);

  return db("fruits")
    .where({ id })
    .first();
}
