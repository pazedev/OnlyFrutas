
SELECT u.nome, p.email
FROM cliente AS u
JOIN cliente AS p ON (u.email = p.email);




create table  cliente(
id_cliente SERIAL PRIMARY KEY,
nome VARCHAR(30)NOT NULL,
sobernome VARCHAR(30)NOT NULL,
email VARCHAR(50)NOT NULL,
telefone VARCHAR NOT NULL,
data_de_nascimento DATE not NULL
);
INSERT INTO cliente (nome, sobernome, email, telefone, data_de_nascimento) 
VALUES ('Maria' ,'Castro', 'maria@gmail.com', '(86)99489 8950','1996-07-25');
SELECT * from cliente;

INSERT INTO cliente (nome, sobernome, email, telefone, data_de_nascimento) 
VALUES ('julio' ,'Moreira', 'moreira@gmail.com', '(86)99589 9950','1993-01-15');
SELECT * from cliente;

INSERT INTO cliente (nome, sobernome, email, telefone, data_de_nascimento) 
VALUES ('Ana' ,'Castilho', 'castilho@gmail.com', '(88)99489 8960','1988-05-28');
SELECT * from cliente;

INSERT INTO cliente (nome, sobernome, email, telefone, data_de_nascimento) 
VALUES ('Matheus' ,'Brito', 'matheus@gmail.com', '(86)99487 8920','1994-03-21');
SELECT * from cliente;



create table  endereço(
  id_endereço SERIAL PRIMARY KEY,
  cep varchar(8)not NULL,
  endereço varchar(80)not NULL,
  estado varchar(20)NOt NULL,
  cidade varchar(30)not NULL,
  complemento varchar(100)not NULL
  fk_id_cliente INT,
  constraint fk_endereço foreign key (fk_id_cliente) REFERENCES cliente (id_cliente) 
);
INSERT INTO endereço (cep, endereço, estado, cidade, complemento) 
VALUES ('64126356' ,'Rua Aurora', 'piracuruca', 'piaui','proximo ao frigotil');
SELECT * FROM endereço;


  
 create table  pedido(
  id_pedido SERIAL PRIMARY KEY,
  quantidade VARCHAR(10)NOT NULL,
  nome_cliente VARCHAR(30)NOT NULL,  
  valor_da_nota VARCHAR not NULL,
  fk_id_cliente INT ,
  constraint fk_pedido foreign key (fk_id_cliente) REFERENCES cliente (id_cliente)   
);
INSERT INTO pedido (quantidade, nome_cliente, valor_da_nota) 
VALUES ('5' ,'Maria', '89,00');
SELECT * FROM  pedido;



create table  produto(
    id_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR(30)NOT NULL,
    preço VARCHAR(8)NOT NULL,
    dcategoria VARCHAR NOT NULL,
    fk_id_cliente INT,
    constraint fk_produto foreign key (fk_id_cliente) REFERENCES cliente (id_cliente)   
);
INSERT INTO produto(nome_produto, preço, dcategoria) 
VALUES ('maça' ,'15,00 kg', 'importados');
SELECT * from produto;



create table  forma_de_pagamento(
  id_forma_de_pagamento SERIAL PRIMARY KEY,
  debito VARCHAR(10)NOT NULL,
  credito VARCHAR(10)NOT NULL,
  parcelado VARCHAR(10)NOT NULL,
  pix VARCHAR(10) NOT NULL,
  fk_id_cliente INT,
  constraint fk_forma_de_pagamento foreign key (fk_id_cliente) REFERENCES cliente (id_cliente)   
);
INSERT INTO forma_de_pagamento (debito, credito, parcelado, pix) 
VALUES ('2', '3', '8', '10');
SELECT * FROM forma_de_pagamento



create table  detalhe_do_pedido(
  id_detalhe_do_pedido SERIAL PRIMARY KEY,
  cod_pedido VARCHAR(10)NOT NULL,
  data_pediddo VARCHAR(10)NOT NULL,
  dat_entrega VARCHAR(10) NOT NULL,
  valor_do_frete VARCHAR(10) not NULL,
  fk_id_cliente INT,
  constraint fk_id_detalhe_do_pedido foreign key (fk_id_cliente) REFERENCES cliente (id_cliente)   
);
INSERT INTO detalhe_do_pedido ( cod_pedido, data_pediddo,dat_entrega, valor_do_frete) 
VALUES ('002','25/05/2023', '26/05/2023','5,00');
SELECT * FROM detalhe_do_pedido


