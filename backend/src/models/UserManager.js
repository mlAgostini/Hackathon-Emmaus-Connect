const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (Firstname, Lastname, IsAdmin, Region, Password) values (?,?,?,?,?)`,
      [user.Firstname, user.Lastname, user.IsAdmin, user.Region, user.Password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set Firstname = ?, Lastname = ?, IsAdmin = ?, Region= ?, Password= ? where id = ?`,
      [user.Firstname, user.Lastname, user.IsAdmin, user.Region, user.Password]
    );
  }
}

module.exports = UserManager;
