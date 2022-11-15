var express=require('express');
var cors=require("cors");
var app=express();
app.listen(8000);
app.use( express.static('public') );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());

var mysql=require('mysql');
var conn=mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "database"
})

conn.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server running")
    }
})

app.get("/index", function (req, res) {
    conn.query("select * from item", [],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    )
}) 
