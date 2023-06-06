create database RE2;
drop database RE2;

use RE2;
create table usuario(
idUsuario int auto_increment primary key,
email varchar(45) unique,
senha int
); drop table usuario;

create table tentativas(
idTentativas int auto_increment,
email varchar(45) unique,
TotalPontos int,
fkUsuario int,
constraint fkUsuarioTentativas foreign key (fkUsuario) references usuario(idUsuario),
constraint pkComposta primary key (idTentativas, fkUsuario)
); drop table tentativas;
desc tentativas;

