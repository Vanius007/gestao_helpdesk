// Importamos a Dependencia Express
var express = require("express");
var nunjucks = require("nunjucks");

// Invocando a função express para levantar um servidor
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});


var modelos = require("./modelos");




//----------------Configurando Nunjucks--------------------
// (Sistemas de Templates)
nunjucks.configure(__dirname + "/visoes", {

   express: app

});

//app.use('/users', users);

// Levanda de fato um servidor WEB nodeJS
app.listen(4000);



app.get("/usuarios", function(req, res){

      modelos.Usuario.findAll().then(function(usuarios){
      return res.status(200).json(usuarios);

  });

 });

app.get("/grupos", function(req, res){

      modelos.Grupo.findAll().then(function(grupos){
      return res.status(200).json(grupos);

	});

    

 });








// Define rotas
/*app.get("/artigo/:artigoID([0-9]+)", function(req, res){

    console.log("Olá galera estou funcionando na porta 3000");
    var artigoID = req.params.artigoID;
    modelos.Artigo.findById(artigoID).then(function(artigo){
    	
    	 res.render("artigo.html",{
               
             artigoPrincipal: artigo 
    	 });
    }); 
   

} );

app.get("/blog", function(req, res){

    console.log("Olá galera estou funcionando na porta 3000");

    var offset = req.query.offset;
   
    modelos.Artigo.findAll({
    	limit: 5,
    	offset:offset
    }).then(function(artigos){




    	modelos.Categoria.findAll().then(function(categorias){

    		 res.render("blog.html",{
               
                artigosBlog: artigos, 
                categorias: categorias
    	     });
            debugger;
            console.log(artigos); 
    	});
    	
    	
    }); 
   

} );

app.get("/usuario", function(req, res){
      // console.log("Olá galera estou funcionando na porta 3000");
    modelos.Usuario.findById(1).then(function(usuario){
                              res.render("usuario.html",{ users: usuario });

                              
     }); 
 });

app.get("/usuario", function(req, res){
      // console.log("Olá galera estou funcionando na porta 3000");
    modelos.Usuario.findAll({ where: {id: 1}
    	                     ,include:[{ model:modelos.Artigo,
    	                       as: "artigos" }]})
                   .then(function(usuario){
                              res.render("usuario.html",{ users: usuario });

                              
     }); 
 });
*/
