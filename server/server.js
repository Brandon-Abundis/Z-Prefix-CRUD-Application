const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcom to the empty route for the CRUD app ♡(˶>⩊<˶)" })
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));