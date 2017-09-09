module.exports = {
    get: (req, res) => {
        const request = require('request'),
              instagram = require('../instaAPI');

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
// url: 'https://api.instagram.com/v1/users/self/media/recent?access_token=1264789626.971ecd9.3cc1498dc3e24f0c8274f8699a9538bb&callback=?',
