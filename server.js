const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
const corsOptions = {
  credentials: true, // Allow credentials (cookies) to be sent to/from origin
  origin: "http://localhost:5173", // Allow only this origin
  methods: "GET, POST, PUT, PATCH, DELETE", // Allow these methods
};
app.use(cors(corsOptions));
app.use(cookieParser());

const AllMyConsumoRoutes = require("./server/routes/consumo.routes");
AllMyConsumoRoutes(app);

const AllMyClientRoutes = require("./server/routes/client.routes");
AllMyClientRoutes(app);

const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
