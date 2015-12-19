var express = require('express')
var app = express()

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
app.put('/message/:id', function(req, res){
    var id = req.params.id;
    var hashCode = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    res.end(hashCode);
})
app.listen(process.argv[2]);