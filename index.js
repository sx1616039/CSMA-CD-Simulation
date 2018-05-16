var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

http.listen(port,function(){
    console.log("listen on *"+port);
})

io.on("connection",function(socket){
    socket.on("send request",function(msg){
        sleep(1000).then(()=>{
            console.log(msg);
            io.emit("feedback",msg);
        })
    })
})

//时间暂停函数
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}