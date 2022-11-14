CREATE DATABASE projeto;

USE projeto;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	sobrenome VARCHAR(45),
	email VARCHAR(45), CONSTRAINT chkEmail CHECK (email LIKE '%@%'),
	senha VARCHAR(45)
);

CREATE TABLE idolo (
	idIdolo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE selecao (
	idSelecao INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE idoloUsuario (
	fkUsuario INT AUTO_INCREMENT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
	fkIdolo INT,
	FOREIGN KEY (fkIdolo) REFERENCES idolo (idIdolo),
	PRIMARY KEY (fkUsuario, fkIdolo)
);

CREATE TABLE selecaoUsuario (
	fkUsuario INT AUTO_INCREMENT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
	fkSelecao INT,
	FOREIGN KEY (fkSelecao) REFERENCES selecao (idSelecao),
	PRIMARY KEY (fkUsuario, fkSelecao)
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
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha'),
	('Alemanha');

INSERT INTO idolo (nome) VALUES 
	('Neymar'),
	('Ronaldo Fenomeno'),
	('Kaka'),
	('Cristiano Ronaldo'),
	('Messi'),
	('Ronaldinho Gaucho'),
	('Puyol'),
	('Neuer');


SELECT * FROM usuario;
