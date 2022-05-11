const User = require("../models/user");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      return { error: "payload no existe" };
    } else if (
      payload.username === null ||
      payload.username === undefined ||
      payload.name === null ||
      payload.name === undefined ||
      payload.id === null ||
      payload.id === undefined
    ) {
      return { error: `necesitan tener un valor válido` };
    } else return new User(payload.username, payload.id, payload.name);
  }
}

module.exports = UserView;