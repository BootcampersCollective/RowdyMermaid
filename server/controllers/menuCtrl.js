var menu = require('../data/menu.json');

module.exports = {
	// get things from the json file
	get: (req, res) => {
		res.json(menu);
	}
};