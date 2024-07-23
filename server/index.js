const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require("./routes/UserRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected");
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, console.log("server started"));