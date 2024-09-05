const express = require('express')
const app = express();
const path=require("path")


app.get('/', (req, res)=>{
    const pathuse=path.join(__dirname,"public/index.html")
    res.sendFile(pathuse)
    
})
app.post('/auth',(req, res)=>{
    res.send(data)
})
app.listen(3000,()=>{
    console.log('app listening in the port 3000');
    
});