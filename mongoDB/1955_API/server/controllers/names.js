var mongoose = require('mongoose');
var Name = mongoose.model("Name");
var names = new Names();
module.exports = names;

function Names(){

  this.index = (req, res) => {
    Name.find({}, (err, names) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`All names loaded successfully`);
        }
        res.json(names);
    });
  }

  this.add = (req, res) => {
    var newName = new Name({name: req.params.name});
    newName.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Added ${req.params.name} successfully`)
        }
      res.redirect('/')
    });
  }

  this.show = (req, res) => {
    Name.findOne({name: req.params.name}, (err, result) => {
        if (err) {
            console.log(err);
            return res.redirect('/');
        } else {
            console.log(`Displayed ${req.params.name} successfully`);
            res.json(result);
        }
    });
  }

  this.destroy = (req, res) => {
    Name.remove({name: req.params.name}, (err, name) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully removed ${req.params.name} from database`);
        }
        res.redirect('/');
    })
  }

}
