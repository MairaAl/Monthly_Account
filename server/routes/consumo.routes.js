const ConsumoController = require("../controllers/consumo.controller");
const { authenticate } = require("../config/jwt.config");
module.exports = (app) => {
  app.get("/api/consumos/", authenticate, ConsumoController.findAllConsumos);
  app.get(
    "/api/consumos/:id",
    authenticate,
    ConsumoController.findOneSingleConsumo
  );
  app.put(
    "/api/consumos/update/:id",
    authenticate,
    ConsumoController.updateExistingConsumo
  );
  app.post(
    "/api/consumos/new/:clientId",
    authenticate,
    ConsumoController.createNewConsumo
  );
  app.delete(
    "/api/consumos/delete/:id",
    authenticate,
    ConsumoController.deleteAnExistingConsumo
  );
};
