USE CleanOurFlat;

DELETE FROM Tasks;

ALTER TABLE Tasks AUTO_INCREMENT = 1;

INSERT INTO Tasks (names, status, owner, priority) VALUES ('œcieranie kurzu z szafki',1,1,1);
INSERT INTO Tasks (names, status, owner, priority) VALUES ('sprz¹tanie kuchni',2,4,3);
INSERT INTO Tasks (names, status, owner, priority) VALUES ('poœcielenie ³ó¿ka',1,1,2);