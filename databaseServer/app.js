// 創造express伺服器
var express=require('express');
// 使用cors打開權限
var cors=require("cors");
var app=express();
// http://localhost:8000/
app.listen(8000);
// 預設資料夾在public
app.use( express.static('public') );
// 可以使用json格式
app.use( express.json() );
// 開啟轉碼
app.use( express.urlencoded( {extended: true}) );
// 設定權限
app.use(cors());

// 設定資料庫來源
var mysql=require('mysql');
var conn=mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "database"
})
// 連接資料庫的時候判斷有沒有error
conn.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server running")
    }
})
// 使用get創建路由
app.get("/index", function (req, res) {
    conn.query("select * from item", [],
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    )
}) 
