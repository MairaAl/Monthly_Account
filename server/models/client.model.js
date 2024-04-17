const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
