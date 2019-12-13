exports.seed = function(knex, Promise) {
  return knex("fruits")
    .truncate()
    .then(function() {
      return knex("fruits").insert([
        { name: "lemon" },
        { name: "lime" },
        { name: "grapefruit" },
        { name: "pomelo" }
      ]);
    });
};
