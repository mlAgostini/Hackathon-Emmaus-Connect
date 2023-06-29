const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (Firstname, Lastname, Region, Password) values (?,?,?,?)`,
      [user.Firstname, user.Lastname, user.Region, user.Password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set Firstname = ?, Lastname = ?, Region= ?, Password= ? where id = ?`,
      [user.Firstname, user.Lastname, user.Region, user.Password]
    );
  }
}

module.exports = UserManager;
