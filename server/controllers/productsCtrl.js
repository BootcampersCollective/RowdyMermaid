var products = require('../data/products.json');

module.exports = {
    // get things from the json file
    get: (req, res) => {
        res.json(products);
    }
};