const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

// all the router files needed
const userRoutes = require("./routes/users");
const itemRoutes = require("./routes/items");
const authRoutes = require("./routes/auth");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcom to the empty route for the CRUD app ♡(˶>⩊<˶)" })
});

app.use("/users", userRoutes);
app.use("/items", itemRoutes);
app.use("/auth", authRoutes);


app.listen(port, () => console.log(`Express server listening on port ${port}`));