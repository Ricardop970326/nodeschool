import fs from 'fs';
import express from 'express';
import * as dotenv from 'dotenv'; 

dotenv.config();
const app = express();
const port = 5000;
const apiKey = process.env.APIKEY;


app.get('/employees', (req, res)=>{

    fs.readFile("employees.json",(err,data)=>{

        res.write(data);
        res.end();

    });

});

app.get('/employees/:id', (req, res)=>{
    const id = req.params.id;
    const employee = req.params.employee;
    if (id > 0 && id <= 10){
    fs.readFile("employees.json",(err,data)=>{

        res.write(data);
        res.end();

    });
}else {
    res.send("There is no employee with that ID");
        res.end();
}

});

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`listening on port ${port}`)
})
