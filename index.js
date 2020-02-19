const express = require("express");
const server = express();
const carsRouter = require("./carsRouter");

server.listen(5000, () => {
  console.log("Express running on port 5000");
})

server.use(express.json());
server.use("/api/cars", carsRouter);