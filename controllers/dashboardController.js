const Product = require("../models/Product");

const dashboardView = (req, res) => {
    res.render("dashboard", {
      user: req.user,
    });
};


module.exports =  {
    dashboardView,
};
