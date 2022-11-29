CREATE DATABASE projeto;

USE projeto;

CREATE TABLE quizPersonagem (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	descricao LONGTEXT,
	posicao VARCHAR(45),
	idade INT,
	imagem MEDIUMTEXT,
    color VARCHAR(45)
);

CREATE TABLE selecaoImagem (
	idSelecaoImagem INT PRIMARY KEY,
	imagem MEDIUMTEXT
);

CREATE TABLE selecao (
	idSelecao INT,
	nome VARCHAR(45),
	fkImagem INT, 
    grupo VARCHAR(45),
    FOREIGN KEY (fkImagem) REFERENCES selecaoImagem (idSelecaoImagem),
	PRIMARY KEY (idSelecao, fkImagem)
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	sobrenome VARCHAR(45),
	email VARCHAR(45), CONSTRAINT chkEmail CHECK (email LIKE '%@%'),
	senha VARCHAR(45),
    fkSelecao INT, FOREIGN KEY (fkSelecao) REFERENCES selecao (idSelecao),
    fkQuiz INT, FOREIGN KEY (fkQuiz) REFERENCES quizPersonagem (idQuiz)
);

INSERT INTO quizPersonagem VALUES
	(1, 'Cristiano Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como extremo-esquerdo ou ponta de lança. Atualmente está sem clube, mas joga pela Seleção Portuguesa, onde é capitão.', 'ST', 37, './img/quiz/cr7.png', '#252525'),
	(2, 'Neuer', 'Manuel Peter Neuer é um futebolista alemão que atua como goleiro. Atualmente defende o Bayern de Munique e a Seleção Alemã.', 'GK', 36, './img/quiz/neuer.png', 'palegreen'),
	(3, 'Messi', 'Lionel Andrés Messi Cuccittini é um futebolista argentino que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Argentina, onde é capitão.', 'ST', 35, './img/quiz/messi.png', '#2666CF'),
	(4, 'Pele', 'Edson Arantes do Nascimento, mais conhecido como Pelé, é um ex-futebolista brasileiro que atuava como atacante. Ele é amplamente considerado como um dos maiores atletas de todos os tempos.', 'ST', 82, './img/quiz/pele.png', 'oldlace'),
	(5, 'Kaka', 'Ricardo Izecson dos Santos Leite, mais conhecido como Kaká, é um ex-futebolista brasileiro que atuava como meio-campista.', 'CM', 40, './img/quiz/kaka.png', 'palevioletred'),
	(6, 'Neymar', 'Neymar da Silva Santos Júnior, mais conhecido apenas como Neymar, é um futebolista brasileiro que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Brasileira. É considerado o principal futebolista brasileiro da atualidade e um dos melhores futebolistas do mundo.', 'CM', 30, './img/quiz/neymar.png', 'khaki'),
	(7, 'Puyol', 'Carles Puyol i Saforcada, mais conhecido por Puyol é um ex-futebolista espanhol que atuava como zagueiro.', 'CB', 44, './img/quiz/puyol.png', 'salmon');

INSERT INTO selecaoImagem VALUES
	(1, '../assets/img/selecao/1.png'), -- 1
	(2, '../assets/img/selecao/2.png'), -- 2
	(3, '../assets/img/selecao/3.png'), -- 3
	(4, '../assets/img/selecao/4.png'), -- 4
	(5, '../assets/img/selecao/5.png'), -- 5
	(6, '../assets/img/selecao/6.png'), -- 6
	(7, '../assets/img/selecao/7.png'), -- 7
	(8, '../assets/img/selecao/8.png'), -- 8
	(9, '../assets/img/selecao/9.png'), -- 9
	(10, '../assets/img/selecao/10.png'), -- 10
	(11, '../assets/img/selecao/11.png'), -- 11
	(12, '../assets/img/selecao/12.png'), -- 12
	(13, '../assets/img/selecao/13.png'), -- 13
	(14, '../assets/img/selecao/14.png'), -- 14
	(15, '../assets/img/selecao/15.png'), -- 15
	(16, '../assets/img/selecao/16.png'), -- 16
	(17, '../assets/img/selecao/17.png'), -- 17
	(18, '../assets/img/selecao/18.png'), -- 18
	(19, '../assets/img/selecao/19.png'), -- 19
	(20, '../assets/img/selecao/20.png'), -- 20
	(21, '../assets/img/selecao/21.png'), -- 21
	(22, '../assets/img/selecao/22.png'), -- 22
	(23, '../assets/img/selecao/23.png'), -- 23
	(24, '../assets/img/selecao/24.png'), -- 24
	(25, '../assets/img/selecao/25.png'), -- 25
	(26, '../assets/img/selecao/26.png'), -- 26
	(27, '../assets/img/selecao/27.png'), -- 27
	(28, '../assets/img/selecao/28.png'), -- 28
	(29, '../assets/img/selecao/29.png'), -- 29
	(30, '../assets/img/selecao/30.png'), -- 30
	(31, '../assets/img/selecao/31.png'), -- 31
	(32, '../assets/img/selecao/32.png'); -- 32

INSERT INTO selecao VALUES 
	(1, 'Alemanha', 1, 'E'), -- 1
	(2, 'Arábia Saudita', 2, 'C'), -- 2
	(3, 'Argentina', 3, 'C'), -- 3
	(4, 'Austrália', 4, 'D'), -- 4
	(5, 'Bélgica', 5, 'F'), -- 5
	(6, 'Brasil', 6, 'G'), -- 6
	(7, 'Camarões', 7, 'G'), -- 7
	(8, 'Canadá', 8, 'F'), -- 8
	(9, 'Catar', 9, 'A'), -- 9
	(10, 'Coreia do Sul', 10, 'H'), -- 10
	(11, 'Costa Rica', 11, 'E'), -- 11
	(12, 'Croácia', 12, 'F'), -- 12
	(13, 'Dinamarca', 13, 'D'), -- 13
	(14, 'Equador', 14, 'A'), -- 14
	(15, 'Espanha', 15, 'E'), -- 15
	(16, 'Estados Unidos', 16, 'B'), -- 16
	(17, 'França', 17, 'D'), -- 17
	(18, 'Gana', 18, 'H'), -- 18
	(19, 'Holanda', 19, 'A'), -- 19
	(20, 'Inglaterra', 20, 'B'), -- 20
	(21, 'Irã', 21, 'B'), -- 21
	(22, 'Japão', 22, 'E'), -- 22
	(23, 'Marrocos', 23, 'F'), -- 23
	(24, 'México', 24, 'C'), -- 24
	(25, 'País de Gales', 25, 'B'), -- 25
	(26, 'Polônia', 26, 'C'), -- 26
	(27, 'Portugal', 27, 'H'), -- 27
	(28, 'Senegal', 28, 'A'), -- 28
	(29, 'Sérvia', 29, 'G'), -- 29
	(30, 'Suíça', 30, 'G'), -- 30
	(31, 'Tunísia', 31, 'D'), -- 31
	(32, 'Uruguai', 32, 'H'); -- 32
    
INSERT INTO usuario (nome, sobrenome, email, senha, fkSelecao, fkQuiz) VALUES
	('Diego', 'Vieira', 'diego@sptech', '123', 6, 1),
	('Igor', 'Gabriel', 'igor@sptech', '123', 1, 2),
	('Nathan', 'Rodrigo', 'nathan@sptech', '123', 3, 3),
	('Nilton', 'Gabriel', 'nilton@sptech', '123', 12, 4),
	('Wilson', 'Kanaiama', 'wilson@sptech', '123', 13, 5),
	('Rafael', 'Aldo', 'rafael@sptech', '123', 15, 1),
	('Matheus', 'Lessa', 'matheus@sptech', '123', 17, 6),
	('José', 'Gabriel', 'jose@sptech', '123', 27, 6),
	('Lucas', 'Bonfim', 'lucas@sptech', '123', 19, 6),
    ('Cesar', 'Augusto', 'cesar@sptech', '123', 32, 3);
    
-- Select do Ranking
SELECT s.nome, COUNT(fkSelecao) 'Ranking', si.imagem FROM usuario as u
        JOIN selecao as s ON fkSelecao = s.idSelecao 
        JOIN selecaoImagem as si ON fkImagem = idSelecaoImagem
        GROUP BY s.nome
        ORDER BY Ranking DESC;

-- Select das Imagens
SELECT * FROM selecao JOIN selecaoImagem ON fkImagem = idSelecaoImagem;
SELECT * FROM selecao;
SELECT * FROM usuario;

SELECT * FROM quizPersonagem;
