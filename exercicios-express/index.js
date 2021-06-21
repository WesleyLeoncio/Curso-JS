const express = require('express');
const app = express();

app.get('/mundo', (req, res)=>{
    res.json({nome: 'Wesley', idade:'25'})
    //res.send('Ola mundo!');
})


 




app.listen(3000, ()=>{
    console.log("Backend executandoc...");
});