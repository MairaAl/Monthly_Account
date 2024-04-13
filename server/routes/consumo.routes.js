const ConsumoController = require("../controllers/consumo.controller");

module.exports = (app) => {
  app.get("/api/consumos/", ConsumoController.findAllConsumos);
  app.get("/api/consumos/:id", ConsumoController.findOneSingleConsumo);
  app.put("/api/consumos/update/:id", ConsumoController.updateExistingConsumo);
  app.post("/api/consumos/new", ConsumoController.createNewConsumo);
  app.delete(
    "/api/consumos/delete/:id",
    ConsumoController.deleteAnExistingConsumo
  );
};
