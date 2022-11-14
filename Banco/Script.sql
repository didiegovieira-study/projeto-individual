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
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
	fkIdolo INT,
	FOREIGN KEY (fkIdolo) REFERENCES idolo (idIdolo),
	PRIMARY KEY (fkUsuario, fkIdolo)
);

CREATE TABLE idoloSelecao (
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
	fkSelecao INT,
	FOREIGN KEY (fkSelecao) REFERENCES selecao (idSelecao),
	PRIMARY KEY (fkUsuario, fkSelecao)
);