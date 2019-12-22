exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "testadmin",
      password: "testadmin",
      fullname: "testadmin man",
      phone: "555-555-5555",
      address: "gotham city",
      state: "New Jersey",
      zip: 07001,
      created: Date.now(),
      role_id: 3
    },
    {
      id: 2,
      username: "testagent",
      password: "testagen",
      fullname: "testagent man",
      phone: "555-555-5555",
      address: "gotham city",
      state: "New Jersey",
      zip: 07001,
      created: Date.now(),
      role_id: 2
    },
    {
      id: 3,
      username: "testfam",
      password: "testfam",
      fullname: "testfam man",
      phone: "555-555-5555",
      address: "gotham city",
      state: "New Jersey",
      zip: 07001,
      created: Date.now(),
      role_id: 1
    }
  ]);
};
