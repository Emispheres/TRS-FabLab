CREATE TABLE clients(
  id INT NOT NULL AUTO_INCREMENT,
  nom VARCHAR(100),
  adresse VARCHAR(100),
  tel VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE `OF`(
  id INT NOT NULL AUTO_INCREMENT,
  clients_id INT NOT NULL,
  nomjob VARCHAR(100),
  etat ENUM ('EN_COURS', 'EN_ATTENTE', 'FINI'),
  debut TIME,
  duree INT,
  tmpRestant INT,
  typCartouche VARCHAR(100),
  qttSupport REAL,
  qttMatiere REAL,
  qttMatiereRestante REAL,
  cout REAL,
  solde REAL,
  commentaire VARCHAR(100),
  numeroCartouche VARCHAR(100),
  dateRemplacementCartouche DATE,
  dateEnregistrementOF  DATETIME,
  operateurs_id INT NOT NULL,
  imprimantes_id INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE operateurs(
  id INT NOT NULL AUTO_INCREMENT,
  utilisateur VARCHAR(100),
  mot_de_passe VARCHAR(100),
  niveau INT,
  PRIMARY KEY(id)
);

CREATE TABLE imprimantes(
  id INT NOT NULL AUTO_INCREMENT,
  nomimp VARCHAR(100),
  commentaire VARCHAR(100),
  idJobEnCours INT,
  cttMat REAL,
  typMat VARCHAR(100),
  cttSup REAL,
  typSup VARCHAR(100),
  ctPlateau REAL,
  typPlateau VARCHAR(100),
  cttUnitTmps REAL,
  disponible BOOLEAN,
  type VARCHAR(100),
  marque VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE `histoTRS`(
  id INT NOT NULL AUTO_INCREMENT,
  jour DATE,
  TRS REAL,
  imprimantes_id INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE temp_hygro(
  id INT NOT NULL AUTO_INCREMENT,
  dates DATETIME,
  temperature INT,
  hygrometrie  INT,
  PRIMARY KEY(id)
);

CREATE TABLE alarme(
  id INT NOT NULL ,
  tempMax INT,
  tempMin INT,
  hygroMax INT,
  hygroMin INT,
  PRIMARY KEY(id)
);

ALTER TABLE `OF`
  ADD CONSTRAINT `operateurs_OF`
    FOREIGN KEY (operateurs_id) REFERENCES operateurs (id);

ALTER TABLE `OF`
  ADD CONSTRAINT `clients_OF` FOREIGN KEY (clients_id) REFERENCES clients (id);

ALTER TABLE `histoTRS`
  ADD CONSTRAINT `imprimantes_histoTRS`
    FOREIGN KEY (imprimantes_id) REFERENCES imprimantes (id);

ALTER TABLE `OF`
  ADD CONSTRAINT `imprimantes_OF`
    FOREIGN KEY (imprimantes_id) REFERENCES imprimantes (id);
