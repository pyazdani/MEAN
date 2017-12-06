var dogs = require('../controllers/dogs');

module.exports = function(app){
    // GET
    app.get('/', dogs.index); // displays all dogs
    app.get('/dogs/new', dogs.new); // form for adding a dog
    app.get('/dogs/edit/:id', dogs.edit); // form to edit an existing dog by id
    app.get('/dogs/:id', dogs.show); // displays information about one dog
    app.get('/dogs/destroy/:id', dogs.destroy); // deletes one dog from database by id

    // POST
    app.post('/dogs/:id', dogs.update); // action attribute for edit form
    app.post('/dogs', dogs.add); // action attribute for form that adds a dog
}
