const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const billRoutes = require('./routes/bill');

const app = express();

app.get('/', (req,res ) =>{
    res.send("Hello Hackers")
});


//Middlewares
app.use(cors());
app.use(express.json());
app.use('/v1',billRoutes);

mongoose.connect("mongodb+srv://pak:1234@cluster0.hyluv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{ useUnifiedTopology: true,useNewUrlParser: true },
() =>{
  console.log("Connected with DB:)");
});

app.listen(3033);