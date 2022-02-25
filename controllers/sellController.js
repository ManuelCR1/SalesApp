const User = require("../models/User");
const Product = require("../models/Product");
const Sell = require("../models/Sell");

const sellView = (req, res) => {
    console.log(req.user);
    res.render("sell", {
        user: req.user
    });
}

const sellProduct = (req, res) => {
    const { sellerName, soldProduct, deliveryPlace, productSubtotal, productTotal, soldDate, deliveryDate } = req.body;
    if (!sellerName || !soldProduct || !deliveryPlace || !productSubtotal || !productTotal || !soldDate || !deliveryDate) {
      console.log("Fill empty fields");
    } else {
        User.findOne({ username: sellerName }).then((user) => {
            if (user) {
                Product.findOne({ name: soldProduct }).then((product) => {
                    if (product) {
                        const sell = new Sell({
                            seller: user,
                            sell: product,
                            placeOfSell: deliveryPlace,
                            subtotal: productSubtotal,
                            total: productTotal,
                            dateOfSell: soldDate,
                            dateOfDelivery: deliveryDate
                        });
                        sell.save().then(() => {
                            res.redirect("/dashboard")
                        }).catch((err) => {
                            console.log(err);
                        });
                    } else {
                        console.log("Product not found");
                    }
                });
            } else {
                console.log("Usuario no existe");
            }
        });
    }
};

module.exports =  {
    sellView,
    sellProduct
};
