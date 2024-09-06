const express = require("express");

const app = express();
const userRoutes = require("./routes/users.js");

const port = 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("the server running in", port);
});
