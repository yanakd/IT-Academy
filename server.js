const { response, request } = require("express");
let express=require("express");

let app=express();

const bodyParser = require('body-parser');
//importation du middleware urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var mysql=require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"bienvenue",
    database:"catalogue"
    });

connection.connect(function(error) {if (error) console.log(error);});

app.get("/",(req, res) =>{
    connection.query("SELECT * from panier;", function (error, result){
        console.log(result);
        res.render("home.ejs", {panier: result})
    })
});

app.get("/user",(req, res)=>{
    res.render("user.ejs", {result: res})
});

app.get("/panier",(req, res) =>{
    connection.query("SELECT * from panier;", function (error, result){
        console.log(result);
        res.render("panier.ejs", {panier: result})
    })
});

app.listen(3300,function(){
    console.log("Server is running on port 3300")
});







