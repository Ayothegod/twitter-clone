
const isAuth = (req, res, next) => {
    if(req.session.isAuth) {
      next()
    } else {
      res.status(301).json("No cookie found, you dont have access!")
    }
  }

  module.exports = {isAuth}