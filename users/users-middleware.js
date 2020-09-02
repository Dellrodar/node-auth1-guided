const Users = require("./users-model");
const bcrypt = require("bcryptjs");

function restrict () {
  // storing error message as were using it multiple times
  const authError = {
    message: "Invalid credentials"
  }

  return async (req, res, next) => {
    try {
      if (!req.session || !req.session.user) {
        return res.status(401).json(authError)
      }
    //   const { username, password } = req.headers
    //   // make sure the values are not empty
    //   if (!username || !password ) {
    //     return res.status(401).json(authError)
    // }

    // const user = await Users.findBy({ username }).first()
    // // make sure the user is valid
    // if (!user) {
    //   return res.status(401).json(authError)
    // }

    // const passwordValid = await bcrypt.compare(password, user.password)
    // // make sure the password is valid
    // if (!passwordValid) {
    //   return res.status(401).json(authError)
    // }
    // // by this point the user is authenticated
    next()

    } catch (err) {
      next(err)
    }
  }
}

module.exports = {
  restrict,
}