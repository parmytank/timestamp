var express = require('express');
var app = express();
var moment = require('moment');
app.get('/',function(req,res){
  res.end('Hello World');
})
app.get('/:input', function(req,res){
  var string = req.params.input;
  if(!isNaN(string)){
    string = Number(string) * 1000;
  }
  if(moment(string, 'MMM DD, YYYY').isValid()){
    var date = moment(string).toDate().toString();
    var unix = moment(string).toDate().getTime()/1000;
    res.end(date + ', ' + unix);
  }
  res.end('Not a valid date');
})
app.listen(process.env.PORT, process.env.IP);
