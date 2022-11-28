CREATE DATABASE projeto;

USE projeto;

CREATE TABLE quizPersonagem (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	descricao LONGTEXT,
	posicao VARCHAR(45),
	idade INT,
	imagem MEDIUMTEXT
);

CREATE TABLE selecaoImagem (
	idSelecaoImagem INT PRIMARY KEY,
	imagem MEDIUMTEXT
);

CREATE TABLE selecao (
	idSelecao INT,
	nome VARCHAR(45),
	fkImagem INT, 
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
	(1, 'Cristiano Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como extremo-esquerdo ou ponta de lança. Atualmente está sem clube, mas joga pela Seleção Portuguesa, onde é capitão.', 'ST', 37, '../img/quiz/cr7.png'),
	(2, 'Neuer', 'Manuel Peter Neuer é um futebolista alemão que atua como goleiro. Atualmente defende o Bayern de Munique e a Seleção Alemã.', 'GK', 36, '../img/quiz/neuer.png'),
	(3, 'Messi', 'Lionel Andrés Messi Cuccittini é um futebolista argentino que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Argentina, onde é capitão.', 'ST', 35, '../img/quiz/messi.png'),
	(4, 'Pele', 'Edson Arantes do Nascimento, mais conhecido como Pelé, é um ex-futebolista brasileiro que atuava como atacante. Ele é amplamente considerado como um dos maiores atletas de todos os tempos.', 'ST', 82, '../img/quiz/pele.png'),
	(5, 'Kaka', 'Ricardo Izecson dos Santos Leite, mais conhecido como Kaká, é um ex-futebolista brasileiro que atuava como meio-campista.', 'CM', 40, '../img/quiz/kaka.png'),
	(6, 'Neymar', 'Neymar da Silva Santos Júnior, mais conhecido apenas como Neymar, é um futebolista brasileiro que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Brasileira. É considerado o principal futebolista brasileiro da atualidade e um dos melhores futebolistas do mundo.', 'CM', 30, '../img/quiz/neymar.png'),
	(7, 'Puyol', 'Carles Puyol i Saforcada, mais conhecido por Puyol é um ex-futebolista espanhol que atuava como zagueiro.', 'CB', 44, '../img/quiz/puyol.png');

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
	(1, 'Alemanha', 1), -- 1
	(2, 'Arábia Saudita', 2), -- 2
	(3, 'Argentina', 3), -- 3
	(4, 'Austrália', 4), -- 4
	(5, 'Bélgica', 5), -- 5
	(6, 'Brasil', 6), -- 6
	(7, 'Camarões', 7), -- 7
	(8, 'Canadá', 8), -- 8
	(9, 'Catar', 9), -- 9
	(10, 'Coreia do Sul', 10), -- 10
	(11, 'Costa Rica', 11), -- 11
	(12, 'Croácia', 12), -- 12
	(13, 'Dinamarca',13), -- 13
	(14, 'Equador', 14), -- 14
	(15, 'Espanha', 15), -- 15
	(16, 'Estados Unidos', 16), -- 16
	(17, 'França', 17), -- 17
	(18, 'Gana', 18), -- 18
	(19, 'Holanda', 19), -- 19
	(20, 'Inglaterra', 20), -- 20
	(21, 'Irã', 21), -- 21
	(22, 'Japão', 22), -- 22
	(23, 'Marrocos', 23), -- 23
	(24, 'México', 24), -- 24
	(25, 'País de Gales', 25), -- 25
	(26, 'Polônia', 26), -- 26
	(27, 'Portugal', 27), -- 27
	(28, 'Senegal', 28), -- 28
	(29, 'Sérvia', 29), -- 29
	(30, 'Suíça', 30), -- 30
	(31, 'Tunísia', 31), -- 31
	(32, 'Uruguai', 32); -- 32
    
INSERT INTO usuario (nome, sobrenome, email, senha, fkSelecao, fkQuiz) VALUES
	('Diego', 'Vieira', 'diego@sptech', '123', 6, 1),
	('Igor', 'Gabriel', 'igor@sptech', '123', 2, 2),
	('Nathan', 'Rodrigo', 'nathan@sptech', '123', 4, 3),
	('Nilton', 'Gabriel', 'nilton@sptech', '123', 10, 4),
	('Wilson', 'Kanaiama', 'wilson@sptech', '123', 11, 5),
	('Lucas', 'Bonfim', 'lucas@sptech', '123', 14, 6);
    

-- Select do Ranking
SELECT s.nome, COUNT(fkSelecao) 'Ranking', si.imagem FROM usuario as u
        JOIN selecao as s ON fkSelecao = s.idSelecao 
        JOIN selecaoImagem as si ON fkImagem = idSelecaoImagem
        GROUP BY s.nome
        ORDER BY Ranking DESC;

-- Select das Imagens
SELECT * FROM selecao JOIN selecaoImagem ON fkImagem = idSelecaoImagem;
        
SELECT * FROM usuario;
SELECT * FROM quizPersonagem;

