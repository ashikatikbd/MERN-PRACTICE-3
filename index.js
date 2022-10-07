const express = require("express");
const app = require("./app");
const PORT = 8080;
const hostname = "127.0.0.1";

app.listen(PORT, hostname, () => {
  console.log(`Server is running ....... http://${hostname}:${PORT}`);
});
