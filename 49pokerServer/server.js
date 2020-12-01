// imports
const express = require("express");
const routes = require("./routes");
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

//use cors
app.use(cors());

// middleware - JSON parsing
app.use(express.json());

// middleware - API routes
app.use("/api/v1/player", routes.players);
app.use("/api/v1/round", routes.rounds);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));