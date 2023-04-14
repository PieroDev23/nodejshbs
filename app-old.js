const http = require("http");

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Disposition", "attachment; filename=list.csv");
  // res.writeHead(200, { "Content-Type": "application/csv" });

  res.write("Hola mundo");
  res.end();
});

server.listen(3001);

console.log(`Escuchando en el puerto`, 3001);
