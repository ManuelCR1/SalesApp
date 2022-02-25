const Product = require("../models/Product");

const reportView = (req, res) => {
    Product.find().then(function(result) {
        //Cambiar este find a la coleccion de sells
        var total= 0
        if(result) {
            for (let i = 0; i < result.length; i++) {
                console.log(result[i].price);
                total += parseInt(result[i].price);
            }
            console.log(total);
            res.render("report", {
                user: req.user,
                products: result,
                totalCost: total
              });
        }
        
    });
    
}

module.exports = {reportView};