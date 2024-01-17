const mysql = require("mysql2/promise");
const dbconfig = require("./dbConfig");

module.exports = {
  async execute(dateStart, dateEnd) {
    let conn;
    try {
      conn = await mysql.createConnection(dbconfig);
      const [rows, fields] = await conn.execute('select * from alerts where date >= ? and date <= ? order by date desc', [dateStart, dateEnd]);
      return rows
    } catch (error) {
      console.log("Erro ao pegar os dados", error);
      throw error;
    } finally {
      // Certifique-se de fechar a conexão, apenas se estiver aberta
      if (conn && conn.end) {
        await conn.end();
      }
    }
  },
}; 
