const db = require("../data/db-config");

module.exports = {
  getUsers,
  getUserId,
  getAllAgents,
  addUser,
  findBy,
  update
};

function getUsers() {
  return db("users");
}

function getUserId(id) {
  return db("users")
    .where("id", "=", id)
    .first();
}

function addUser(data) {
  return db("users")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return getUserId(id);
    });
}

function findBy(username) {
  return db("users")
    .join("roles", { "roles.id": "users.role_id" })
    .where("username", "=", username)
    .first();
}

function update(id, changed) {
  return (
    db("users")
      // .returning("*")
      .update(changed)
      .where("id", "=", id)
  );
}

function getAllAgents() {
  return db("users")
    .join("roles", { "roles.id": "users.role_id" })
    .where("role_id", "=", "2");
}
