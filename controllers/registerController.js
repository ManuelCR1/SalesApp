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
      console.log("Campos vacios");
    }
    if (password !== confirm) {
      console.log("Contraseñas no coinciden");
    } else {
        User.findOne({ username: username }).then((user) => {
            if (user) {
                console.log("El usuario ya existe");
                res.render("register", {
                    username,
                    password,
                    confirm,
                });
            } else {
                const newUser = new User({
                    username,
                    password,
                });
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then( res.redirect("/"))
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
