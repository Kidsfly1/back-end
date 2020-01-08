exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments();

      tbl
        .string("role")
        .notNullable()
        .unique();
    })
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 255)
        .notNullable()
        .unique();

      tbl.string("password", 8000).notNullable();

      tbl.string("fullname", 255).notNullable();

      tbl.string("phone", 255).notNullable();

      tbl.string("address", 255).notNullable();

      tbl.string("state", 255).notNullable();

      tbl.integer("zip").notNullable();

      tbl.string("created").notNullable();

      tbl
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("trips", tbl => {
      tbl.increments();

      tbl.string("date").notNullable();

      tbl.string("airport", 255).notNullable();

      tbl.string("flight", 255).notNullable();

      tbl.string("departure").notNullable();

      tbl.integer("carryOn").notNullable();

      tbl.integer("children").notNullable();

      tbl.string("agentReq", 255);

      tbl.string("special", 255);

      tbl.string("upgrades", 255);

      tbl
        .integer("family_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("agent_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("trips")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
