// VIEW CONTROLLER

var ObjectId = require("mongodb").ObjectId; 

module.exports = {
    
    viewAll: function(app, req, res){
        console.info('Helo from the controller')
        app.set('myDb').collection('filmsCollection').find({}).toArray(function(err, docs){
            console.dir(docs)
            return res.render('allFilms', {
                title: 'All Films',
                films: docs
            })
        })
    }

}
