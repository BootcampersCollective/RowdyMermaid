"use strict";
var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  routes = require("./controllers/routes"),
  fileServer = express.static("public"),
  fs = require("fs"),
  app = express(),
  PORT = process.env.port || 3e3;
app.use(fileServer), app.use(morgan("dev")), mongoose.Promise = global.Promise, mongoose.connect("mongodb://localhost/5340CoffeeShop", function(e) {
  e ? console.log("NO CONNECTION TO DB") : console.log("SQUAWK")
}), routes(app), app.listen(PORT, function(e) {
  e ? (console.log("Server Error: ", e), process.exit(1)) : console.log("Server is up on port " + PORT)
});
var menu = require("../data/menu.json");
module.exports = {
  get: function(e, o) {
    o.json(menu)
  }
};
var thingCtrl = require("./thingCtrl"),
  menuCtrl = require("./menuCtrl"),
  path = require("path");
module.exports = function(e) {
  e.get("/api/things", thingCtrl.get), e.get("/api/things/:id", thingCtrl.get), e.post("/api/things", thingCtrl.upsert), e.post("/api/things/:id", thingCtrl.upsert), e.get("/api/menu", menuCtrl.get), e.get("*", function(e, o) {
    o.sendFile(path.resolve(__dirname + "/../../public/index.html"))
  })
};
var Thing = require("../models/things");
module.exports = {
  get: function(e, o) {
    e.params.id ? Thing.findOne({
      _id: e.params.id
    }).exec(function(e, n) {
      o.json(n)
    }) : Thing.find({}).exec(function(e, n) {
      o.json(n)
    })
  },
  upsert: function(e, o) {
    e.params.id ? Thing.findOneAndUpdate({
      _id: e.params.id
    }, e.body, {
      new: !0
    }, function(e, n) {
      o.send(n)
    }) : new Thing(e.body).save(function(e, n) {
      e ? o.json(e) : o.json(n)
    })
  }
};
var thingSchema = (mongoose = require("mongoose")).Schema({
  name: String,
  stuff: String
});
module.exports = mongoose.model("Thing", thingSchema);
