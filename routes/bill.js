const express = require('express');
const router = express.Router();
const data = require('../model/data');

require('dotenv/config');


router.post('/datamake', async (req, res) =>{
    const d = new data({
        datanumber:req.body.datanumber,
        message2:req.body.message2,
        message1:req.body.message1,
        number:req.body.number,
        password:req.body.password,
        username:req.body.username,
        
    });
    try{
        const saved = await d.save();
        res.status(200).send({'message':'success'});
    }catch(err){
         res.status(404).send(err);
    }
});

router.post('/dataget', async (req, res) =>{
    const  d = await data.find({datanumber:req.body.datanumber});
    res.status(200).send({"_data":d});
});



module.exports = router;