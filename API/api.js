const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const health = require('../Models/healthData');

app.post('/new' , async (req , resp) =>{
let data = await health(req.body);
let result = await data.save();
if(result){
    console.log("Record Created");
    resp.send(result);
}
})

app.get('/allRecord' , async (req , resp) =>{
    let data = await health.find();
    if(data){
        console.log("Record fetched");
        resp.send(data);
    }
})

app.put('/update/:id' , async (req , resp) =>{
    let data = await health.updateOne({_id : req.params.id} , {$set : req.body});
    if(data){
        console.log("Log Updated");
        resp.send(data);
    }
})

app.delete('/delete/:id' , async (req , resp)=>{
    let data = await health.deleteOne({_id:req.params.id});
    if(data){
        console.log("Log deleted");
        resp.send(data);
    }
})

app.get('/allRecords/:key' , async (req , resp) =>{
    let data = await health.find({
        '$or' : [
            {bodyTemperature : {$regex : req.params.key}},
            {bloodPressure : {$regex : req.params.key}},
            { heartRate : {$regex : req.params.key}}
        ]
    });
    if(data){
        console.log("Found");
        resp.send(data);
    }
})

app.listen(5000);