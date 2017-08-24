var Thing = require('../models/things');

module.exports = {
    // get things from the database
    get: (req,res) => {
        // if id present, get one specific thing
        if(req.params.id) {
            Thing.findOne({_id: req.params.id}).exec((err, data) => {
                res.json(data);
            });
        }
        // get all things
        else {
            Thing.find({}).exec((err, data) => {
                res.json( data);
            });
        }
    },
    // this is how we will post new things to the database
    upsert: (req,res) => {
        if (req.params.id) {
            // do update stuff here
            Thing.findOneAndUpdate({_id : req.params.id}, req.body, {new : true}, function(err, data){
                res.send(data);
            });
        } else {
            var newThing = new Thing(req.body);
            newThing.save(function(err,data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            });
        }
    }
}