const request = require('request'),
      instagram = require('../instagram');

module.exports = {
    get: (req, res) => {


        const url = "https://api.instagram.com/v1/users/self/media/recent?access_token="+instagram.INSTA_API_CONSTANTS.APP_ACCESS_TOKEN;

        request(url, (err, response, body) => {

            if(!err && response.statusCode == 200) {
                res.json((JSON.parse(body)).data);
            } else {
                console.log("ERROR: ", err);
            }
        });
    }
};
