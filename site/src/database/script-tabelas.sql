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
	('Alemanha', '../assets/img/selecao/1.png'), --1
	('Arábia Saudita', '../assets/img/selecao/2.png'), --2
	('Argentina', '../assets/img/selecao/3.png'), --3
	('Austrália', '../assets/img/selecao/4.png'), --4
	('Bélgica', '../assets/img/selecao/5.png'), --5
	('Brasil', '../assets/img/selecao/6.png'), --6
	('Camarões', '../assets/img/selecao/7.png'), --7
	('Canadá', '../assets/img/selecao/8.png'), --8
	('Catar', '../assets/img/selecao/9.png'), --9
	('Coreia do Sul', '../assets/img/selecao/10.png'), --10
	('Costa Rica', '../assets/img/selecao/11.png'), --11
	('Croácia', '../assets/img/selecao/12.png'), --12
	('Dinamarca', '../assets/img/selecao/13.png'), --13
	('Equador', '../assets/img/selecao/14.png'), --14
	('Espanha', '../assets/img/selecao/15.png'), --15
	('Estados Unidos', '../assets/img/selecao/16.png'), --16
	('França', '../assets/img/selecao/17.png'), --17
	('Gana', '../assets/img/selecao/18.png'), --18
	('Holanda', '../assets/img/selecao/19.png'), --19
	('Inglaterra', '../assets/img/selecao/20.png'), --20
	('Irã', '../assets/img/selecao/21.png'), --21
	('Japão', '../assets/img/selecao/22.png'), --22
	('Marrocos', '../assets/img/selecao/23.png'), --23
	('México', '../assets/img/selecao/24.png'), --24
	('País de Gales', '../assets/img/selecao/25.png'), --25
	('Polônia', '../assets/img/selecao/26.png'), --26
	('Portugal', '../assets/img/selecao/27.png'), --27
	('Senegal', '../assets/img/selecao/28.png'), --28
	('Sérvia', '../assets/img/selecao/29.png'), --29
	('Suíça', '../assets/img/selecao/30.png'), --30
	('Tunísia', '../assets/img/selecao/31.png'), --31
	('Uruguai', '../assets/img/selecao/32.png'); --32

INSERT INTO idolo (nome) VALUES 
	('Neymar'),
	('Ronaldo Fenomeno'),
	('Kaka'),
	('Cristiano Ronaldo'),
	('Messi'),
	('Ronaldinho Gaucho'),
	('Puyol'),
	('Neuer');

