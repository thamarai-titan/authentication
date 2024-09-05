const express = require('express')
const router = express.Router();
const {v4: uuidv4} = require('uuid')

let users = []

router.get('/',(req, res)=>{
    res.send(users);
})
router.post('/', (req, res)=>{
    const user = req.body;
    users.push({...user, id: uuidv4()})

    res.send('the data was added');
})

router.get('/:id', (req, res)=>{
    const {id} = req.params;

    const foundUser = users.find((user)=>user.id === id)

    res.send(foundUser)
})

module.exports = router;