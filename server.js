

var jsonData = { "name":"Abraham",
                 "Email":"abramlinx",
                  "age":19
                };


var express = require ("express");


var app = express();


/*
app.get("/",function(req,res){
   res.sendFile(__dirname+"/green.html");
});
*/
app.use(express.static('client'));


app.get("/question/quesionID",function(req,res){
  res.json(jsonData);
});



app.listen(7000,function(){
  console.log("server running on port 7000");
});
