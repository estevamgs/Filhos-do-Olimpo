CREATE DATABASE FilhosDoOlimpo;
USE FilhosDoOlimpo;
CREATE TABLE deuses(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    codigo CHAR(14)
);
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    cpf CHAR(11) UNIQUE NOT NULL,
    fk_deuses INT,
    FOREIGN KEY (fk_deuses) REFERENCES deuses(id)
);
CREATE TABLE estatisticas (
    id INT AUTO_INCREMENT,
    forca DECIMAL,
    vitalidade DECIMAL,
    energia DECIMAL,
    inteligencia DECIMAL,
    velocidade DECIMAL,
    resistencia DECIMAL,
    fk_deuses INT,
    FOREIGN KEY (fk_deuses) REFERENCES deuses(id),
    CONSTRAINT pkComposta PRIMARY KEY(id, fk_deuses)
);
INSERT INTO deuses (id, nome, codigo) VALUES (1, 'Poseidon', 'P01');
INSERT INTO deuses (id, nome, codigo) VALUES (2, 'Hades', 'H01');
INSERT INTO deuses (id, nome, codigo) VALUES (3, 'Zeus', 'Z01');

INSERT INTO estatisticas VALUES (1, 92, 100, 90, 74, 72, 98, 1);
INSERT INTO estatisticas VALUES (2, 80, 78, 100, 76, 95, 80, 2);
INSERT INTO estatisticas VALUES (3, 65, 84, 95, 100, 58, 92, 3);

select * from deuses;
select * from usuario;

select usuario.nome as "Nome",
	deuses.nome as "Deus"
    from usuario
    join deuses
    on usuario.fk_deuses = deuses.id;