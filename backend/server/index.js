const express = require("express");
const cors = require("cors");
const PORT = 3000;
const bodyParser = require("body-parser")
const app = express();

app.use(cors());
app.use(express.json());


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
