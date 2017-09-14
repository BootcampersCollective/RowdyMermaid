module.exports = {
    get: (req, res) => {
        const request = require('request'),
            FB = require('../FBApiConstants');

        // const url =

        request(url, (err, response, body) => {
            if(!err && response.statusCode == 200) {
                res.json((JSON.parse(body)).data);
            } else {
                console.log("ERROR: ", err);
            }
        });
    }
};