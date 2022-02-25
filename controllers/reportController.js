const Sell = require("../models/Sell");

const reportView = (req, res) => {
    Sell.find().then(function(result) {

        var total= 0
        if(result) {
            //How much was sold?
            for (let i = 0; i < result.length; i++) {
                total += parseInt(result[i].total);
            }

            //Who sell the most?
            // Insert all elements in hash.
            var hash = new Map();
            for (var i = 0; i < result.length; i++)
            {
                if(hash.has(result[i].seller.username))
                    hash.set(result[i].seller.username, hash.get(result[i].seller.username)+1)
                else
                    hash.set(result[i].seller.username, 1)
            }
            // find the max frequency
            var max_count = 0, topSeller = -1;
            hash.forEach((value,key) => {
                if (max_count < value) {
                    topSeller = key;
                    max_count = value;
                }
            });

            //Top 5 products
            // Insert all elements in hash.
            var hash = new Map();
            for (var i = 0; i < result.length; i++)
            {
                if(hash.has(result[i].sell.name))
                    hash.set(result[i].sell.name, hash.get(result[i].sell.name)+1)
                else
                    hash.set(result[i].sell.name, 1)
            }
            const top5Products = new Map([...hash.entries()].sort((a, b) => b[1] - a[1]));
            res.render("report", {
                user: req.user,
                sells: result,
                totalCost: total,
                bestSeller: topSeller,
                bestProduct: top5Products
            });
        }
        
    });
    
}

module.exports = {reportView};