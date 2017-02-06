
// express init
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3003, listen);


var listen = () => {
  console.log('app running on port 3000');
}

app.use(express.static('static'));