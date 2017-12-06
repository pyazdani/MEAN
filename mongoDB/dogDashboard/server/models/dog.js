var mongoose = require("mongoose");

var DogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  color: String,
  age: Number,
}, {timestamps: true })

mongoose.model("Dog", DogSchema);
