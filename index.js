const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('hey')
})

app.listen(3000,()=>{
    console.log('app listening in the port 3000');
    
});