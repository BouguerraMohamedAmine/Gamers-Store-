const mysql = require('mysql2');
const mysqlConfig = require('./config');

const connection = mysql.createConnection(mysqlConfig)

connection.connect((err) => {
    if (err) console.log("error connecting", err);
    else console.log("hay jet ll data base");
});

const getAllProducts = function (req, res) {
    const query = "SELECT * FROM product"; // Replace 'Dogs' with your actual table name
  
    connection.query(query, (err, results) => {
      if (err) {
        console.log("Error fetching data from the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
  };
  
  const addProduct = function (req, res) {
    const { name, description , price , category , quantity , image  } = req.body;
    const query = "INSERT INTO product (name, description, price , category , quantity , image) VALUES (?, ? ,? ,? ,?,?)"; // Replace 'kleb' with your actual table name
  
    connection.query(query, [name, description , price , category , quantity , image], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
  };
  
  const updateProduct = function (req, res) {
    const id = req.params.id
    const { name, description , price , category , quantity , image  } = req.body;
    const query = "UPDATE product SET name=? , description=? , price=? , category=? , quantity=? , image=? WHERE id=?"; // Replace 'kleb' with your actual table name
  
    connection.query(query, [name, description, price , category , quantity , image , id], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
  };
  
  const deleteProduct = function (req, res) {
    const productId = req.params.id
    const query = "DELETE FROM product WHERE id=?"; 
  
    connection.query(query, [productId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json(results);
    });
  };
  

  module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }