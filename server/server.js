const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

// const budget = {
//     myBudget: [
//     {
//         title: 'Eat out',
//         budget: 30
//     },
//     {
//         title: 'Rent',
//         budget: 10
//     },
//     {
//         title: 'groceries',
//         budget: 60
//     },
//     ]
// };


app.get('/budget', (req, res) => {
    res.json(require("./mydata.json").myBudget);
});

app.listen(port, () =>{
    console.log(`API app listening at http://localhost:${port}`);
});
