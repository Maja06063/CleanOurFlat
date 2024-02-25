USE CleanOurFlat;

DELETE FROM Tasks;

ALTER TABLE Tasks AUTO_INCREMENT = 1;

INSERT INTO Tasks (names, status, owner, priority) VALUES ('scieranie kurzu z szafki',1,1,1);
INSERT INTO Tasks (names, status, owner, priority) VALUES ('sprzatanie kuchni',2,4,3);
INSERT INTO Tasks (names, status, owner, priority) VALUES ('poscielenie lozka',1,1,2);
INSERT INTO Tasks (names, status, owner, priority) VALUES ('odkurzanie', 3, 2, 1);