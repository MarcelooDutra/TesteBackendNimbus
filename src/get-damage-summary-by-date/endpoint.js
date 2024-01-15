const controller = require("./controller");
const url = require('url');

module.exports = {
  async execute(dateStart, res) {
    try {
      const url_parts = url.parse(dateStart.url, true);
      const query = url_parts.query;

      if (!query.dateStart && !query.dateEnd) {
        throw new Error("Os parametros dataStart e dateEnd são obrigatorios");
      }
      const response = await controller.execute(query.dateStart, query.dateEnd)
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response));

    } catch (error) {
      console.log("Erro no caso de uso", error.message);
      throw error;
    }
  },
};  
