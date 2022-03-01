const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    datanumber:{
        type:String,
        required:true,
    },
    message2:{
        type:String,
        required:true,
    },
    message1:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    username:{
        type:String,
    }
});

module.exports = mongoose.model('data',dataschema);