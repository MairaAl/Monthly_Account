const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.post("/api/auth/register", UserController.register);
  app.post("/api/auth/login", UserController.login);
  app.post("/api/auth/logout", UserController.logout);
};
