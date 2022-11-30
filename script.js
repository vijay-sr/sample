var http=require('http')
var fs=require('fs')
http.createServer(serv).listen(7000, ()=>console.log("server started"))
function serv(req,res){
    if(req.url==='/'){
    fs.readFile(index.html,function(err,dat){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(dat)
        res.end()
    })
}else if(req.url==='/login'){
    fs.readFile(signup.html ,function(err,login){
    
    res.write(login)
    res.end()
})
}
else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error')
    res.end()
}
}