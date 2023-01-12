const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('GET /places <h1> This is the PLACES Page </h1>')
})

module.exports = router
