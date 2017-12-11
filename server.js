var express = require('express');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
var app=express();
var cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/',function(req,res){
   res.send('Hello World -Sankalp');   
  });


app.get('/authors',function(req,res){
	var data1={},data2={},i,j,k='',count;

	
	request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

         
        data1=JSON.parse(body);
  
  request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

        data2=JSON.parse(body);
        // res.send(data2);
     for(i=0;i<data1.length;i++)
{
	 count=0;
	for(j=0;j<data2.length;j++)
	{
	if(data1[i].id == data2[j].userId)
		count=count+1;
     }
     k+=(data1[i].name + '-' + count+'<br>');
 }
 
 res.send(k);
 });
});
 });

app.get('/setcookie',function(req,res){
	res.cookie('Name','Sankalp');
  res.cookie('Age','21');
  res.send("'cookie has been created");
	
});

app.get('/getcookies',function(req,res){
 var p = req.cookies.Name+"<br>"+req.cookies.Age;
  res.send(p);
 
});
 app.get('/robots.txt', function (req,res) {
   res.status(403).send({
      message: 'Access Denied'
   });
});

 app.get('/image',function(req,res){
 res.sendFile(path.join(__dirname, 'image.html'));

 });
app.post('/inp',function(req,res){
  var text=req.body.username;
  console.log(text);
  res.send('console logged');
});
   


app.get('/input',function(req,res){
  res.sendFile(path.join(__dirname,'ui', 'input.html'));

  });

var port =8081;

app.listen(8081,function(){
	console.log('IMAD app port number ${port}!');
});
