const AbstractManager = require("./AbstractManager");

class StockManager extends AbstractManager {
  constructor() {
    super({ table: "stock" });
  }

  insert(stock) {
    return this.database.query(
      `insert into ${this.table} (Price, Price_category, model_id) values (?,?,?)`,
      [stock.Price, stock.Price_category, stock.model_id]
    );
  }

  update(stock) {
    return this.database.query(
      `update ${this.table} set model_id = ?, Price= ?, Price_category= ? where id = ?`,
      [stock.Price, stock.Price_category, stock.model_id]
    );
  }

  getByName(name) {
    return this.database.query(
      `SELECT model.*, stock.Price, stock.Price_category
       FROM model
       JOIN stock ON model.id = stock.model_id
       WHERE model.Model_name = ?`,
      [name]
    );
  }
}

module.exports = StockManager;
