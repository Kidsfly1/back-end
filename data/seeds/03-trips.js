exports.seed = function(knex) {
  return knex("trips").insert([
    {
      id: 1,
      date: "2019-12-25", //YYYY-MM-DD
      airport: "",
      flight: "",
      departure: "00:00:00", //HH-MM-SS
      carryOn: 0,
      checked: 0,
      family_id: 3
    }
  ]);
};
