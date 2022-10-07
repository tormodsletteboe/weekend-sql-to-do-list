const express = require('express');
const router = express.Router();

//DB CONNECTION
const pool = require('../modules/pool');

//get
router.get('/',(req,res)=>{
    console.log('in router GET');
    let sqlText = 'SELECT * FROM "todos";';
    pool.query(sqlText)
    .then((dbRes)=>{
        console.log('in router GET then');
        res.send(dbRes.rows);
    })
    .catch((err)=>{
        console.log('in router GET catch',err);
        res.sendStatus(500);
    })
});
//post
//put
//delete

module.exports = router;