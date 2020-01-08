module.exports = {
  validRegister,
  validLogin
};

// checks to make sure correct values and add created/role_id
async function validRegister(req, res, next) {
  let user = req.body;

  if (!user.username) {
    next({
      status: 400,
      message: "Missing username"
    });
  }

  if (!user.password) {
    next({
      status: 400,
      message: "Missing password"
    });
  }

  // if (!user.fullname) {
  //   next({
  //     status: 400,
  //     message: "Missing fullname"
  //   });
  // }

  // if (!user.phone) {
  //   next({
  //     status: 400,
  //     message: "Missing phone"
  //   });
  // }

  // if (!user.address) {
  //   next({
  //     status: 400,
  //     message: "Missing address"
  //   });
  // }

  // if (!user.state) {
  //   next({
  //     status: 400,
  //     message: "Missing state"
  //   });
  // }

  // if (!user.zip) {
  //   next({
  //     status: 400,
  //     message: "Missing zip"
  //   });
  // }

  req.body.created = Date.now();
  if (!user.role_id) {
    req.body.role_id = 1;
  }
  next();
}

async function validLogin(req, res, next) {
  let user = req.body;

  if (!user.username) {
    next({
      status: 400,
      message: "Missing username"
    });
  }

  if (!user.password) {
    next({
      status: 400,
      message: "Missing password"
    });
  }
  next();
}
