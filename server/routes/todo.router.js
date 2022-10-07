const express = require('express');
const router = express.Router();

//DB CONNECTION
const pool = require('../public/modules/pool');

//get
router.get('/',(req,res)=>{
    pool.query()
    .then((dbRes)=>{
        res.send(dbRes);
    })
    .catch((err)=>{
        console.log('in pool GET catch',err);
        res.sendStatus(500);
    })
});
//post
//put
//delete

module.exports = router;