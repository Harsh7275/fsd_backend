const http = require('http');

const fs=require('fs/promises');
const server = http.createServer(async(req,res)=>{
    const data = await fs.readFile("http://dummyjson.com/products");
    res.setHeader("Content-Type","application/json");
    res.statusCode = 200;
    const newproducts = await data.json();
    console.log(newproducts);
    res.end(JSON.stringify(newproducts));

});

server.listen(9000,(err)=>{
    if(err)
        console.log(err);
    else
        console.log("serveris running on port 9000");
});