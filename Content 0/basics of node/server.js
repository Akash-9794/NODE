// create a server using node

require('http').createServer((req,res)=>{
    console.log(req);
    res.end('<h1>Hello node js its me </h1>');
}).listen(3000);