import http from "http";
const server = http.createServer((req,res)=>{
    console.log("method:",req.method);
   if(req.url == "/" && req.method === "GET"){
    res.end("<h1>products details</h1>");
   }
   else{
    res.statusCode = 400;
    res.end("not found");
   }
})

server.listen(3000,()=> console.log("prg10 is running at port 3000"));