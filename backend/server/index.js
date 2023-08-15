const express = require("express");
const cors = require("cors");
const PORT = 3000;
const bodyParser = require("body-parser")
const app = express();
const db = require('../db/index.js');


// const { getAllProducts , addProduct , updateProduct , deleteProduct } = require("../db/index.js");


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());




// app.get("/api/product", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.get("/api/product" , db.getAllProducts)
app.post("/api/product", db.addProduct )
app.put ("/api/product/:id", db.updateProduct )
app.delete("/api/product/:id", db.deleteProduct)




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
