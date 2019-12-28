const router = require("express").Router();

const Trips = require("./trip-model");
const restricted = require("../auth/restricted-middleware");

// add trip
router.post("/", (req, res) => {
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
router.get("/", (req, res) => {
  Trips.getTrips()
    .then(trip => {
      res.status(200).json(trip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while getting trips" });
    });
});

// get trip by id
router.get("/:id", (req, res) => {
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

// update trip by id
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
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
