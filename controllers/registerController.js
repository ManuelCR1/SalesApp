const User = require("../models/User");
const bcrypt = require("bcryptjs");


const registerView = (req, res) => {
    console.log(req.user);
    res.render("register", {
        user: req.user
      });
}

const registerUser = (req, res) => {
    const { username, password, confirm } = req.body;
    if (!username || !password || !confirm) {
      console.log("Fill empty fields");
    }
    //Confirm Passwords
    if (password !== confirm) {
      console.log("Password must match");
    } else {
        //Validation
        User.findOne({ username: username }).then((user) => {
            if (user) {
                console.log("username already exists");
                res.render("register", {
                    username,
                    password,
                    confirm,
                });
            } else {
                //Validation
                const newUser = new User({
                    username,
                    password,
                });
                //Password Hashing
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then( res.redirect("/dashboard"))
                            .catch((err) => console.log(err));
                    })
                );
            }
        });
    }
};  


module.exports =  {
    registerView,
    registerUser,
};
