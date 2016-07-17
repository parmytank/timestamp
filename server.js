var express = require('express');
var app = express();
var moment = require('moment');
app.get('/',function(req,res){
  res.end('Please input a date or a unix timestamp');
})
app.get('/:input', function(req,res){
  var string = req.params.input;
  var natural = null;
  var unix = null;
  if(!isNaN(string)){
    string = Number(string) * 1000;
  }
  if(moment(string, 'MMM DD, YYYY').isValid()){
    natural = moment(string).format('MMM DD, YYYY');
    unix = moment(string).toDate().getTime()/1000;
  }
  res.end(JSON.stringify({"unix":unix, "natural":natural}));
})
app.listen(process.env.PORT, process.env.IP);
