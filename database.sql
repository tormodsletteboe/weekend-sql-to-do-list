DROP TABLE IF EXISTS "todos";
CREATE TABLE "todos" (
    "id" SERIAL PRIMARY KEY,
    "task_name" VARCHAR(30) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "date_created" TEXT,
    "completed" BOOLEAN);

INSERT INTO "todos"
    ("task_name", "description", "date_created","completed")
VALUES
    ('Wash Car','Make sure to use soap',LOCALTIMESTAMP,FALSE),
    ('House inspection','Call Hank first',LOCALTIMESTAMP,FALSE),
    ('Fix hole in wall','its in the bathroom',LOCALTIMESTAMP,FALSE),
    ('Mow lawn','front and back',LOCALTIMESTAMP,FALSE),
    ('rake leafs','use the blower if it works',LOCALTIMESTAMP,FALSE),
    ('Prep bike for winter','change the tires to winter tires',LOCALTIMESTAMP,FALSE),
    ('walk dogs','bring enough poop bags',LOCALTIMESTAMP,FALSE),
    ('make dinner','pizza with goat cheese, not the margaritha', LOCALTIMESTAMP,FALSE),
    ('Paint Door','Decide between green or red',LOCALTIMESTAMP,FALSE);