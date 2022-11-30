var http=require('http')
var fs=require('fs')
var url=require('url')
const { log } = require('console')

http.createServer(serv).listen(7000, ()=>console.log("server started"))
function serv(req,res){
    var newurl=url.parse(req.url,true)
    // console.log(newurl.pathname);

    if(newurl.pathname==='/'){
    fs.readFile('index.html',function(err,dat){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(dat)
        res.end()
    })
}else if(newurl.pathname==='/signup'){
    fs.readFile('signup.html' ,function(err,loginpage){
        res.writeHead(200,{'Content-Type':'text/html'})
    res.write(loginpage)
    res.end()
})
}
else if(newurl.pathname==='/signupaction'){
    // fs.readFile()
    res.writeHead(200,{'Content-Type':'text/html'})
    // console.log(newurl.query);
    res.write('<h1>'+ newurl.query.name +'</h1>')
    res.end()

}
else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error')
    res.end()
}
}