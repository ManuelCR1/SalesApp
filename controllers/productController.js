const User = require("../models/User");
const Product = require("../models/Product");

const registerProductView = (req, res) => {
    res.render("registerProduct", {
    } );
}

const registerProduct = (req, res) => {
    console.log("************", req.body);
    const { productName, productDescription, productPrice, productQuantity, productDeliver, productSeller } = req.body;
    if (!productName || !productDescription || !productPrice || !productQuantity || !productSeller) {
      console.log("Fill empty fields");
    } else {
        //Validation
        User.findOne({ username: productSeller }).then((user) => {
            if (user) {
                const newProduct = new Product({
                    name: productName,
                    description: productDescription,
                    price: productPrice,
                    quantity: productQuantity,
                    deliverable: productDeliver,
                    seller: user,
                });
                newProduct
                .save()
                .then( res.redirect("/dashboard"))
                .catch((err) => console.log(err));
            } else {
                console.log("Usuario no existe");
            }
        });
    }
};

module.exports =  {
    registerProductView,
    registerProduct,
};
