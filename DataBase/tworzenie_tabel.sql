USE CleanOurFlat;

DROP TABLE Tasks;

CREATE TABLE Tasks(
    tasks_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    names varchar(255) NOT NULL,
    status int NOT NULL,
    owner int NOT NULL,
    priority int
);   

