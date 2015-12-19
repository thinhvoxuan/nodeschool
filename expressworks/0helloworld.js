/**
 * Created by thinhvoxuan on 12/20/15.
 */
var express = require('express')
var app = express()
app.get('/home', function(req, res) {
    res.end('Hello World!')
})
app.listen(process.argv[2]);