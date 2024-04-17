const mongoose = require("mongoose");

const ConsumoSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: [false, "Client is required"],
    },
  },
  { timestamps: true }
);

const Consumo = mongoose.model("Consumo", ConsumoSchema);

module.exports = Consumo;
