const express = require("express");
const dotenv = 
("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const reuseConnection = require("mongo-express-req");
app.use(reuseConnection(process.env.CONNECTION_URL));
app.use(cors());
app.use(express.json());
const module1 = require("./get_products");
app.use("/products", module1);

const module2 = require("./post_products");
app.use("/insert", module2);

const module3 = require("./update_product");
app.use("/update", module3);

const module4 = require("./delete_product");
app.use("/delete", module4);

let port = process.env.PORT || 1234;
app.listen(port, () => {
    console.log("server listening the port number 5050");
});