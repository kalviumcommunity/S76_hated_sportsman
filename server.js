const express = require('express');
const app = express();
const pot = 3000;

app.get('/ping', (req, res)=>
{
    res.send('Pong!');}
);

app.listen(prompt, () =>{
    console.log(`Server is running at http://localhost:${port}`);
});