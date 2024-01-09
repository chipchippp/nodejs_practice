const express = require('express')
const songRouter = require('../practice/routes/SongRoutes')
const app = express();


// middleware
app.use(express.json());
app.use("/api/songs", songRouter);

app.listen(3001, ()=>{
    console.log(`Server started on http://localhost:3001/api/songs`)
})

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost:27017/crud");

module.exports = app;
