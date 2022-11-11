CREATE DATABASE projeto;

USE projeto;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	sobrenome VARCHAR(45),
	email VARCHAR(45),
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
	FOREING KEY fkUsuario REFERENCES usuario (idUsuario),
	fkIdolo INT,
	FOREING KEY fkIdolo REFERENCES idolo (idIdolo),
	PRIMARY KEY (fkUsuario, fkIdolo)
);

CREATE TABLE idoloSelecao (
	fkUsuario INT,
	FOREING KEY fkUsuario REFERENCES usuario (idUsuario),
	fkSelecao INT,
	FOREING KEY fkIdolo REFERENCES selecao (idSelecao),
	PRIMARY KEY (fkUsuario, fkSelecao)
);