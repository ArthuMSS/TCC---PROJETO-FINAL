CREATE DATABASE shintechDB;
USE shintechDB;

CREATE TABLE TB_USUARIO (
id_usuario      int primary key auto_increment,
nm_usuario      varchar(50),
dt_nascimento   datetime,
ds_email        varchar(99),
ds_senha        varchar(20),
nr_cpf          int(11)
);

CREATE TABLE TB_ADMIN (
id_admin       int primary key auto_increment,
nm_admin        varchar(200),
ds_email        varchar(99),
ds_senha        varchar(20)
);
