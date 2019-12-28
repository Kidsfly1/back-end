const router = require("express").Router();

const Trips = require("./trip-model");
const restricted = require("../auth/restricted-middleware");

router.post("/", (req, res) => {
  Trips.addTrip(req.body)
    .then(saved => {
      res.status(201).json({ message: "Trip created succesfully!" }, saved);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error while adding trip" });
    });
});

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

module.exports = router;
