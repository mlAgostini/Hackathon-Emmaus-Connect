const AbstractManager = require("./AbstractManager");

class ModelManager extends AbstractManager {
  constructor() {
    super({ table: "model" });
  }

  insert(model) {
    return this.database.query(
      `insert into ${this.table} (Brand, Model_name, RAM, Memory, Device_condition, Other, user_id) values (?,?,?,?,?,?,?)`,
      [
        model.Brand,
        model.Model_name,
        model.RAM,
        model.Memory,
        model.Device_condition,
        model.Other,
        model.user_id,
      ]
    );
  }

  update(model) {
    return this.database.query(
      `update ${this.table} set Brand= ?, Model_name= ?, RAM= ?, Memory= ?, Device_condition= ?, Other= ? where id = ?`,
      [
        model.Brand,
        model.Model_name,
        model.RAM,
        model.Memory,
        model.Device_condition,
        model.Other,
      ]
    );
  }
}

module.exports = ModelManager;
