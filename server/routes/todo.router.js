//console.log('in todo.router.js');


const express = require('express');
const router = express.Router();

//DB CONNECTION
const pool = require('../modules/pool');

//get
router.get('/',(req,res)=>{
    //console.log('in router GET');
    let sqlText = 'SELECT * FROM "todos" ORDER BY "id" ASC ;';
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
    

    let sqlText = `INSERT INTO "todos"
    ("task_name","description","date_created","time_done","completed")
    VALUES
    ($1,$2,LOCALTIMESTAMP,NULL,FALSE);`;

    
    pool.query(sqlText,[req.body.task,req.body.description])
    .then((dbRes)=>{
        res.sendStatus(201);
    })
    .catch((err)=>{
        res.sendStatus(500);
    })
});

//put
router.put('/:index',(req,res)=>{
    //this will toggle on and off the completed
    //this NOT "completed" will not be updated til afterwards so I use the previous state to
    //set a localtimestamp or null, ie thats why WHEN TRUE THEN NULL, because it will become FALSE after the update,
    //ie if I went back into the DB after this update 
    let sqlText = `UPDATE "todos"
                   SET "completed" = NOT "completed",
                        "time_done"= CASE "completed" 
                                     WHEN TRUE THEN NULL
                                     WHEN FALSE THEN LOCALTIMESTAMP
                                     END
    WHERE "id" = $1;`;
    pool.query(sqlText,[req.params.index])
        .then((dbRes)=>{
            res.sendStatus(200);
        })
        .catch((err)=>{
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
        res.sendStatus(500);
    });
});

module.exports = router;