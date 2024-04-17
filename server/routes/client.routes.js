const ClientController = require("../controllers/client.controller");

module.exports = (app) => {
  app.get("/api/clients/", ClientController.findAllClients);
  app.get("/api/clients/:id", ClientController.findOneSingleClient);
  app.put("/api/clients/update/:id", ClientController.updateExistingClient);
  app.post("/api/clients/new", ClientController.createNewClient);
  app.delete(
    "/api/clients/delete/:id",
    ClientController.deleteAnExistingClient
  );
};
