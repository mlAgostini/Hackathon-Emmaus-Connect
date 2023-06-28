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
}

module.exports = StockManager;
