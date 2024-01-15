const mysql = require("mysql2/promise");
const dbconfig = require("./dbConfig");

module.exports = {
  async execute(dateStart, dateEnd) {
    try {
      const conn = await mysql.createConnection(dbconfig);
      const [rows, fields] = await conn.execute('select * from repository where date >= ? and date <= ? order by date desc', [dateStart, dateEnd]);
      return rows
    } catch (error) {
      console.log("Erro ao pegar os dados", error);
      throw error;
    }
  },
}; 
