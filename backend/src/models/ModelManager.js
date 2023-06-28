const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "model" });
  }

  insert(model) {
    return this.database.query(
      `insert into ${this.table} (Brand, Model_name, RAM, Memory, Buy_price, Sell_Price, Condition, Other) values (?,?,?,?,?,?,?,?)`,
      [
        model.Brand,
        model.Model_name,
        model.RAM,
        model.Memory,
        model.Buy_price,
        model.Sell_price,
        model.Condition,
        model.other,
      ]
    );
  }

  update(model) {
    return this.database.query(
      `update ${this.table} set Brand= ?, Model_name= ?, RAM= ?, Memory= ?, Buy_price= ?, Sell_Price= ?, Condition= ?, Other= ? where id = ?`,
      [
        model.Brand,
        model.Model_name,
        model.RAM,
        model.Memory,
        model.Buy_price,
        model.Sell_price,
        model.Condition,
        model.other,
      ]
    );
  }
}

module.exports = ModelManager;
