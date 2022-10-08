//console.log('in todo.router.js');


const express = require('express');
const router = express.Router();

//DB CONNECTION
const pool = require('../modules/pool');

//get
router.get('/',(req,res)=>{
    //console.log('in router GET');
    let sqlText = 'SELECT * FROM "todos" ORDER BY "completed" ;';
    pool.query(sqlText)
    .then((dbRes)=>{
        //console.log('in router GET then');
        res.send(dbRes.rows);
    })
    .catch((err)=>{
        //console.log('in router GET catch',err);
        res.sendStatus(500);
    })
});
//post
router.post('/',(req,res)=>{
    //console.log('in router POST');

    let sqlText = `INSERT INTO "todos"
    ("task_name","description","date_created","completed")
    VALUES
    ($1,$2,LOCALTIMESTAMP,FALSE);`;

    
    pool.query(sqlText,[req.body.task,req.body.description])
    .then((dbRes)=>{
        //console.log('in router GET then');
        res.sendStatus(201);
    })
    .catch((err)=>{
        //console.log('in router GET catch',err);
        res.sendStatus(500);
    })
});

//put
router.put('/:index',(req,res)=>{
    //this will toggle on and off the completed
    let sqlText = `UPDATE "todos"
                    SET "completed" = NOT "completed"
                    WHERE "id" = $1;`;
    pool.query(sqlText,[req.params.index])
        .then((dbRes)=>{
            res.sendStatus(200);
        })
        .catch((err)=>{
            //console.log('in router PUT catch',err);
            res.sendStatus(500);
        })
});

//delete
router.delete('/:index',(req,res)=>{
    let sqlText = `DELETE FROM "todos"
                   WHERE "id" = $1;`;
    pool.query(sqlText,[req.params.index])
    .then((dbRes)=>{
        res.sendStatus(200);
    })
    .catch((err)=>{
        //console.log('in router DELETE catch',err);
        res.sendStatus(500);
    });
});

module.exports = router;