CREATE DATABASE projeto;

USE projeto;

CREATE TABLE idolo (
	idIdolo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE selecao (
	idSelecao INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	sobrenome VARCHAR(45),
	email VARCHAR(45), CONSTRAINT chkEmail CHECK (email LIKE '%@%'),
	senha VARCHAR(45),
    fkSelecao INT, FOREIGN KEY (fkSelecao) REFERENCES selecao (idSelecao),
    fkIdolo INT, FOREIGN KEY (fkIdolo) REFERENCES idolo (idIdolo)
);

INSERT INTO selecao (nome) VALUES 
	('Alemanha'),
	('Arábia Saudita'),
	('Argentina'),
	('Austrália'),
	('Bélgica'),
	('Brasil'),
	('Camarões'),
	('Canadá'),
	('Catar'),
	('Coreia do Sul'),
	('Costa Rica'),
	('Croácia'),
	('Dinamarca'),
	('Equador'),
	('Espanha'),
	('Estados Unidos'),
	('França'),
	('Gana'),
	('Holanda'),
	('Inglaterra'),
	('Irá'),
	('Japão'),
	('Marrocos'),
	('México'),
	('País de Gales'),
	('Polônia'),
	('Portugal'),
	('Senegal'),
	('Sérvia'),
	('Suíça'),
	('Tunísia'),
	('Uruguai');
	

INSERT INTO idolo (nome) VALUES 
	('Neymar'),
	('Ronaldo Fenomeno'),
	('Kaka'),
	('Cristiano Ronaldo'),
	('Messi'),
	('Ronaldinho Gaucho'),
	('Puyol'),
	('Neuer');

