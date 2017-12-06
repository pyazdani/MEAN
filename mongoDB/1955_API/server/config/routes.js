var names = require('../controllers/names');

module.exports = function(app){
    app.get('/', names.index); // displays all names
    app.get('/new/:name', names.add) // adds a name into database, e.g. 'localhost:8000/new/Steve Jobs'
    app.get('/:name', names.show) // show info about that person
    app.get('/remove/:name', names.destroy) // deletes a name from the database
}
