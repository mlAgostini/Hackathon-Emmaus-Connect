const AbstractManager = require("./AbstractManager");

class StockManager extends AbstractManager {
  constructor() {
    super({ table: "stock" });
  }

  insert(stock) {
    return this.database.query(
      `insert into ${this.table} (model_id) values (?)`,
      [stock.model_id]
    );
  }

  update(stock) {
    return this.database.query(
      `update ${this.table} set model_id = ? where id = ?`,
      [stock.model_id]
    );
  }

  // getByName(name) {
  //   return this.database.query(
  //     `SELECT model.*
  //      FROM model
  //      JOIN stock ON model.id = stock.model_id
  //      WHERE model.Model_name = ?
  //     `,
  //     [name]
  //   );
  // }
  getByName(name) {
    return this.database.query(
      `SELECT model.*
       FROM model
       JOIN stock ON model.id = stock.model_id
       WHERE model.Model_name = ?`,
      [name]
    );
  }
}

module.exports = StockManager;
