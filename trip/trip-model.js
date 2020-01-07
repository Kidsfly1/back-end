const db = require("../data/db-config");

module.exports = {
  getTrips,
  getTripId,
  getByAgentId,
  addTrip,
  update,
  remove
};

function getTrips() {
  return db("trips");
}

function getTripId(id) {
  return db("trips")
    .where("id", "=", id)
    .first();
}

function getByAgentId(id) {
  return db("trips").where("agent_id", "=", id);
}

function addTrip(data) {
  return db("trips")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return getTripId(id);
    });
}

function update(id, changed) {
  return db("trips")
    .where({ id })
    .update(changed);
}

function remove(id) {
  return db("trips")
    .where({ id })
    .del();
}
