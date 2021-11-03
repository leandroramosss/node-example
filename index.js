var express = require('express');

const port = process.env.PORT || 3000

var app = express();

app.get('/',function(req,res){
    res.send("Site de Tecnologia");
});

app.get('/portateis',function(req,res){
    res.send("Categoria de Portateis");
});

app.get('/smartphones',function(req,res){
    res.send("Categoria de Smartphones");
}); 

app.get('/tablets',function(req,res){
    res.send("Categoria de Tablets");
});

app.listen(port,function(){
    console.log("Servidor ativo no porto 8080");
});