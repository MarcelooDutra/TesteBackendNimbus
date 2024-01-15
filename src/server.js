const http = require("http");

const getDamageSummaryByDateRoute = require("./get-damage-summary-by-date/route");

const server = http.createServer((req, res) => {
  const adjustedUrl = req.url.split("?")[0]
  if (
    req.method.toLocaleLowerCase() === getDamageSummaryByDateRoute.method &&
    adjustedUrl === getDamageSummaryByDateRoute.path
  ) { 
  getDamageSummaryByDateRoute.fn(req, res);
 
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Não encontrado");
  }
});

module.exports = server;
