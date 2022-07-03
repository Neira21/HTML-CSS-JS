const http = require("http");

function sitioweb(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Mi primer servidor web con <strong>Node.js</strong> " );
}

let servidor = http.createServer(sitioweb);

servidor.listen(8081, "192.168.0.106");

console.log("Servidor iniciado en el puerto 8081");