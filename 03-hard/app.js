import fs from 'fs';
import express from 'express';
import * as dotenv from 'dotenv'; 

dotenv.config();
const app = express();
const port = 5000;
const apiKey = process.env.APIKEY;

app.get('/employees', (req, res) => {
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading employees.json:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const employees = JSON.parse(data);
            res.json(employees);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).send('Error parsing JSON');
        }
    });
});

app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    if (id > 0 && id <= 10) {
        fs.readFile('employees.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading employees.json:', err);
                res.status(500).send('Internal Server Error');
                return;
            }
            try {
                const employees = JSON.parse(data);
                const employee = employees.find((emp) => emp.id === parseInt(id));

                if (employee) {
                    res.json(employee);
                } else {
                    res.status(404).send('Employee not found');
                }
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                res.status(500).send('Error parsing JSON');
            }
        });
    } else {
        res.status(400).send('There is no empleyee with this ID. Try again!!!');
    }
});

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`listening on port ${port}`)
})


////////////////
// import fs from 'fs';
// import express from 'express';
// import * as dotenv from 'dotenv';

// dotenv.config();
// const app = express();
// const port = 5000;
// const apiKey = process.env.APIKEY;

// app.get('/employees', (req, res) => {
//     fs.readFile('employeess.json', (err, data) => {
//         res.write(data);
//         res.end();
//     });
// });

// app.get('/employees/:id', (req, res) => {
//     const id = req.params.id;

//     fs.readFile('employeess.json', (err, data) => {
//         const employees = JSON.parse(data);

//         const employee = employees.find((emp) => emp.id === parseInt(id));

//         if (employee) {
//             res.send(employee);
//         } else {
//             res.status(404).send('Employee not found');
//         }
//     });
// });

// app.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`Listening on port ${port}`);
// });


//////////////////////


// import fs from 'fs';
// import express from 'express';
// import axios from 'axios';
// import * as dotenv from 'dotenv';

// dotenv.config();
// const app = express();
// const port = 7000;
// const apiKey = process.env.APIKEY

// app.get(('/' || '/employees'), (req, res) => {
//     fs.readFile('./employees.json', (error, data) => {
//         res.write(data);
//         res.end();
//     })
// })

// app.get(('/employees'), (req, res) => {
//     fs.readFile('./employees.json', (error, data) => {
//         res.write(data);
//         res.end();
//     })
// })

// app.get(('/employees/:id'), (req, res) => {
//     const employeeID = parseInt(req.params.id);
//     fs.readFile('./employees.json', (error, data) => {
//         if (error) {
//             console.log(error);
//         } else {
//             const employees = JSON.parse(data)
//             const employee = employees.find(id => id.employeeID === employeeID)
//             if (employee) {
//                 res.json(employee)
//             } else {
//                 res.status(404)
//             }
//         }
//         res.write(data);
//         res.end();
//     })
// })


// const jsonFile = async (req, res, next) => {
//     try {
//         const data = await fs.readFile('./hard.json');
//         req.jsonData = JSON.parse(data);
//         next();
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };
// app.get('/employees/:id', jsonFile, (req, res) => {
//     const employeeID = parseInt(req.params.id);
//     const employee = req.jsonData.find((emp) => emp.employeeID === employeeID);
//     if (employee) {
//         res.json(employee);
//     } else {
//         res.status(404).send('Employee not found');
//     }
// });

///////////////////

// import fs from 'fs';
// import express from 'express';
// import * as dotenv from 'dotenv';

// dotenv.config();
// const app = express();
// const port = 5000;
// const apiKey = process.env.APIKEY;

// app.get('/employees', (req, res) => {
//     fs.readFile('employees.json', (err, data) => {
//         if (err) {
//             console.error('Error reading employees.json:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }

//         try {
//             const employees = parseJsonArray(data);
//             res.send(employees);
//         } catch (parseError) {
//             console.error('Error parsing JSON:', parseError);
//             res.status(500).send('Error parsing JSON');
//         }
//     });
// });

// app.get('/employees/:id', (req, res) => {
//     const id = req.params.id;

//     fs.readFile('employees.json', (err, data) => {
//         if (err) {
//             console.error('Error reading employees.json:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }

//         try {
//             const employees = parseJsonArray(data);

//             const employee = employees.find((emp) => emp.id === parseInt(id));

//             if (employee) {
//                 res.send(employee);
//             } else {
//                 res.status(404).send('Employee not found');
//             }
//         } catch (parseError) {
//             console.error('Error parsing JSON:', parseError);
//             res.status(500).send('Error parsing JSON');
//         }
//     });
// });

// function parseJsonArray(data) {
//     const jsonData = JSON.parse(data);
//     if (!Array.isArray(jsonData)) {
//         throw new Error('JSON data is not an array');
//     }
//     return jsonData;
// }

// app.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`Listening on port ${port}`);
// });


////////


// app.get('/employees', (req, res)=>{

//     fs.readFile("employees.json",(err,data)=>{

//         res.write(data);
//         res.end();

//     });

// });

// app.get('/employees/:id', (req, res)=>{
//     const id = req.params.id;
//     // const employee = req.params.employee;
//     if (id > 0 && id <= 10){
//     fs.readFile("employees.json",(err,data)=>{

//         res.write(data);
//         res.end();

//     });
// }else {
//     res.send("There is no employee with that ID");
//         res.end();
// }

// });
////////