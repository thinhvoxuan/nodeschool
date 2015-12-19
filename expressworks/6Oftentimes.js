var express = require('express')
var app = express()
app.get('/search', function(req, res){
    var object = req.query;
    res.send(object)
})
app.listen(process.argv[2]);