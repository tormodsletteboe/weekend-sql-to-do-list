DROP TABLE IF EXISTS "todos";
CREATE TABLE "todos" (
    "id" SERIAL PRIMARY KEY,
    "task_name" VARCHAR(30) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "date_created" TIMESTAMP);

INSERT INTO "todos"
    ("task_name", "description", "date_created")
VALUES
    ('Wash Car','Make sure to use soap','2022-10-07 23:10:11'),
    ('House inspection','Call Hank first','2022-10-06 23:10:11'),
    ('Fix hole in wall','its in the bathroom','2022-10-05 23:10:11'),
    ('Mow lawn','front and back','2022-10-04 23:10:11'),
    ('rake leafs','use the blower if it works','2022-10-03 23:10:11'),
    ('Prep bike for winter','change the tires to winter tires','2022-10-02 23:10:11'),
    ('walk dogs','bring enough poop bags','2022-10-01 23:10:11'),
    ('make dinner','pizza with goat cheese, not the margaritha','2022-09-29 23:10:11'),
    ('Paint Door','Decide between green or red','2022-10-07 13:10:11');