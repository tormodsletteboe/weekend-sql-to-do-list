DROP TABLE IF EXISTS "todos";
CREATE TABLE "todos" (
    "id" SERIAL PRIMARY KEY,
    "task_name" VARCHAR(20) NOT NULL,
    "description" VARCHAR(50) NOT NULL,
    "date_created" TEXT,
    "time_done" TEXT,
    "completed" BOOLEAN);

INSERT INTO "todos"
    ("task_name", "description", "date_created","time_done","completed")
VALUES
    ('Wash Car','Make sure to use soap',LOCALTIMESTAMP,NULL,FALSE),
    ('House inspection','Call Hank first',LOCALTIMESTAMP,NULL,FALSE),
    ('Fix hole in wall','its in the bathroom',LOCALTIMESTAMP,NULL,FALSE),
    ('Mow lawn','front and back',LOCALTIMESTAMP,NULL,FALSE),
    ('rake leafs','use the blower if it works',LOCALTIMESTAMP,NULL,FALSE),
    ('Prep bike for winter','change the tires to winter tires',LOCALTIMESTAMP,NULL,FALSE),
    ('walk dogs','bring enough poop bags',LOCALTIMESTAMP,NULL,FALSE),
    ('make dinner','pizza with goat cheese, not the margaritha', LOCALTIMESTAMP,NULL,FALSE),
    ('Paint Door','Decide between green or red',LOCALTIMESTAMP,NULL,FALSE);

    -- SELECT * FROM "todos" ORDER BY "completed", "id" LIMIT 100;

    -- UPDATE "todos" SET "completed" = true WHERE "id"=2;

    -- DELETE FROM "todo" WHERE "id"=2;