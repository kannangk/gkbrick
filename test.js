const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("API Hit")
    res.send("Hi this is Android User")
});

app.listen((5000, () => {console.log("connection 5000")}));