const { authenticate } = require("../config/jwt.config");
const ClientController = require("../controllers/client.controller");

module.exports = (app) => {
  app.get("/api/clients/", ClientController.findAllClients);
  app.get(
    "/api/clients/:id",
    authenticate,
    ClientController.findOneSingleClient
  );
  app.put(
    "/api/clients/update/:id",
    authenticate,
    ClientController.updateExistingClient
  );
  app.post("/api/clients/new", authenticate, ClientController.createNewClient);
  app.delete(
    "/api/clients/delete/:id",
    authenticate,
    ClientController.deleteAnExistingClient
  );
};
