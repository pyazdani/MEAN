var mongoose = require("mongoose");

var NameSchema = new mongoose.Schema({
    name: String,
});

mongoose.model("Name", NameSchema);
