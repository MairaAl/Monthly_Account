const Consumo = require("../models/consumo.model");

module.exports.findAllConsumos = (req, res) => {
  Consumo.find()
    .then((allDaConsumos) => res.json({ consumos: allDaConsumos }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports.findOneSingleConsumo = (req, res) => {
  Consumo.findOne({ _id: req.params.id })
    .then((oneSingleConsumo) => res.json({ consumo: oneSingleConsumo }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports.createNewConsumo = (req, res) => {
  Consumo.create(req.body)
    .then((newlyCreatedConsumo) => res.json({ consumo: newlyCreatedConsumo }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports.updateExistingConsumo = (req, res) => {
  Consumo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedConsumo) => res.json({ consumo: updatedConsumo }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports.deleteAnExistingConsumo = (req, res) => {
  Consumo.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};
