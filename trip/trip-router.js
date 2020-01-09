const router = require("express").Router();

const Users = require("../api/api-model");
const Trips = require("./trip-model");
const { validTrip } = require("./trip-middleware");
const restricted = require("../auth/restricted-middleware");

// add trip
router.post("/", restricted, validTrip, (req, res) => {
  Trips.addTrip(req.body)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while adding trip" });
    });
});

// get all trips
router.get("/admin", restricted, (req, res) => {
  Trips.getTrips()
    .then(trip => {
      res.status(200).json(trip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while getting trips" });
    });
});

// get all trips by user
router.get("/my", restricted, async (req, res) => {
  const id = await Users.findBy(req.token.username);
  Trips.getTripsByUser(id.id)
    .then(trip => {
      res.status(200).json(trip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while getting trips" });
    });
});

// get trip by id
router.get("/:id", restricted, (req, res) => {
  const id = req.params.id;

  Trips.getTripId(id)
    .then(trip => {
      res.status(200).json(trip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while getting trip" });
    });
});

// get trips by agent id
router.get("/agent/:id", restricted, async (req, res) => {
  // const id = await Users.findBy(req.token.username);
  const id = req.params.id;
  Trips.getByAgentId(id)
    .then(trip => {
      res.status(200).json(trip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while getting trip by agent" });
    });
});

// update trip by id
router.put("/:id", restricted, (req, res) => {
  const id = req.params.id;

  Trips.update(id, req.body)
    .then(trip => {
      res.status(200).json(trip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while updating trip" });
    });
});

// delete trip by id
router.delete("/:id", restricted, (req, res) => {
  const id = req.params.id;

  Trips.remove(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "Trip deleted!" });
      } else {
        res.status(404).json({ message: "Item not found to be deleted!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while deleting trip" });
    });
});

module.exports = router;
