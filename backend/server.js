const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/placementdb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>res.send("Backend Running"));
app.listen(5000, ()=>console.log("Server on 5000"));