module.exports = {
  validTrip
};

async function validTrip(req, res, next) {
  let trip = req.body;
  console.log(req, res);
  if (!trip.date) {
    next({
      status: 400,
      message: "Missing date"
    });
  }

  if (!trip.airport) {
    next({
      status: 400,
      message: "Missing airport"
    });
  }

  if (!trip.flight) {
    next({
      status: 400,
      message: "Missing flight"
    });
  }

  if (!trip.departure) {
    next({
      status: 400,
      message: "Missing departure"
    });
  }

  if (!trip.carryOn) {
    next({
      status: 400,
      message: "Missing carryOn"
    });
  }

  next();
}
