const Product = require("../models/Product");

const dashboardView = (req, res) => {
  Product.find().then((product) => {
    if (product) {
        console.log(product);
        res.render("dashboard", {
          user: req.user,
          product: product,
        });
    } else {
        console.log("Usuario no existe");
    }
  });
};


module.exports =  {
    dashboardView,
};
