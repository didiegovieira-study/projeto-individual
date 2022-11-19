CREATE DATABASE projeto;

USE projeto;

CREATE TABLE idolo (
	idIdolo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

CREATE TABLE selecao (
	idSelecao INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	imagem MEDIUMTEXT
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

INSERT INTO selecao (nome, imagem) VALUES 
	('Alemanha', '../assets/img/selecao/1.png'),
	('Arábia Saudita', '../assets/img/selecao/2.png'),
	('Argentina', '../assets/img/selecao/3.png'),
	('Austrália', '../assets/img/selecao/4.png'),
	('Bélgica', '../assets/img/selecao/5.png'),
	('Brasil', '../assets/img/selecao/6.png'),
	('Camarões', '../assets/img/selecao/7.png'),
	('Canadá', '../assets/img/selecao/8.png'),
	('Catar', '../assets/img/selecao/9.png'),
	('Coreia do Sul', '../assets/img/selecao/10.png'),
	('Costa Rica', '../assets/img/selecao/11.png'),
	('Croácia', '../assets/img/selecao/12.png'),
	('Dinamarca', '../assets/img/selecao/13.png'),
	('Equador', '../assets/img/selecao/14.png'),
	('Espanha', '../assets/img/selecao/15.png'),
	('Estados Unidos', '../assets/img/selecao/16.png'),
	('França', '../assets/img/selecao/17.png'),
	('Gana', '../assets/img/selecao/18.png'),
	('Holanda', '../assets/img/selecao/19.png'),
	('Inglaterra', '../assets/img/selecao/20.png'),
	('Irã', '../assets/img/selecao/21.png'),
	('Japão', '../assets/img/selecao/22.png'),
	('Marrocos', '../assets/img/selecao/23.png'),
	('México', '../assets/img/selecao/24.png'),
	('País de Gales', '../assets/img/selecao/25.png'),
	('Polônia', '../assets/img/selecao/26.png'),
	('Portugal', '../assets/img/selecao/27.png'),
	('Senegal', '../assets/img/selecao/28.png'),
	('Sérvia', '../assets/img/selecao/29.png'),
	('Suíça', '../assets/img/selecao/30.png'),
	('Tunísia', '../assets/img/selecao/31.png'),
	('Uruguai', '../assets/img/selecao/32.png');

INSERT INTO idolo (nome) VALUES 
	('Neymar'),
	('Ronaldo Fenomeno'),
	('Kaka'),
	('Cristiano Ronaldo'),
	('Messi'),
	('Ronaldinho Gaucho'),
	('Puyol'),
	('Neuer');

