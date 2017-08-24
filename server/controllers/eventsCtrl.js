module.exports = {
    get: (req, res) => {
        const request = require('request'),
              FB = require('../FBApiConstants');

        const url = "https://graph.facebook.com/" + FB.FB_API_CONSTANTS.PAGE_ID +
                        "/events?access_token=" + FB.FB_API_CONSTANTS.APP_ACCESS_TOKEN;

        request(url, (err, response, body) => {
            if(!err && response.statusCode == 200) {
                res.json((JSON.parse(body)).data);
            } else {
                console.log("ERROR: ", err);
            }
        });
    }
};
