var mongoose = require('mongoose');
var Dog = mongoose.model("Dog");
var dogs = new Dogs();
module.exports = dogs;

function Dogs(){
  this.index = (req, res) => {
    Dog.find({}, (err, dogs) => {
      console.log(err);
      res.render('index', {dogs})
    });
  }
  this.new = (req, res) => {
    res.render('new')
  }


  this.add = (req, res) => {
    var dog = new Dog(req.body);
    dog.save((err) => {
      res.redirect('/')
    });
  }

  this.show = (req, res) => {
    const id = req.params.id;
    Dog.find({_id: id}, (err, dog) => {
      res.render('show', {dog})
    });
  }

  this.edit = (req, res) => {
    const id = req.params.id;
    Dog.find({_id: id}, (err, dog) => {
      res.render('edit', {dog})
    });
  }

  this.update = (req, res) => {
    const id = req.params.id;
    // update dog based on id
    Dog.update({_id: id}, req.body, (err, dog) => {
        res.redirect('/')
    })
  }

  this.destroy = (req, res) => {
    const id = req.params.id;
    Dog.remove({_id: id}, (err, dog) => {
      res.redirect('/')
    })
  }

}
