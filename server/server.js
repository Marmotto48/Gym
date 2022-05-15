const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
// const port = process.env.PORT || 5000;
const port =  5000;


const http = require("http");
const server = http.createServer(app);


//connect to the database
connectDB();
//middleware routing body parse
app.use(express.json());

app.use("/user", require("./Routers/userRouters"));
app.use("/product", require("./Routers/productRouters"));

server.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server is running on port : ${port}`);
});
