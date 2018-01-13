const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/post/fetch', function(req, res) {
    console.log("params post: ", req.body);
    res.json(req.body);
    // res.status(500).send({ error: "boo:(" });

});



app.get('/get/fetch', function(req, res) {
    console.log("params get: ", req.query);
    res.json(req.query);



});
app.listen(3000, () => console.log('Example app listening on port 3000!'));



