const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>home page</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "Lucas w",
        email: "lucas@lucas.com",
      },
      {
        name: "Leonardo H",
        email: "leonardo@leonardo.com",
      },
    ];
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
