const passport = require('passport');



const loginView = (req, res) => {
    res.render("login", {
    } );
}

const loginUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      console.log("Please fill in all the fields");
      res.render("login", {
        username,
        password,
      });
    } else {
      passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res);
    }
  };

module.exports =  {
    loginView,
    loginUser,
};
