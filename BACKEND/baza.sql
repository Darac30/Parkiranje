use master;
go
drop database if exists parking;
go
create database parking collate Croatian_CI_AS;
go
use parking;

-- sekcija tablica

create table razine(
sifra int not null primary key identity(1,1),
oznakarazine varchar(20) not null,
cijena decimal(18,2) not null
);

create table parkirnamjesta(
sifra int not null primary key identity(1,1),
oznakamjesta varchar(20) not null,
razina int not null references razine(sifra)
);

create table parkiranja(
sifra int not null primary key identity(1,1),
datumulaska datetime,
datumizlaska datetime,
parkirnomjesto int not null references parkirnamjesta(sifra),
registarskaoznaka varchar(20)
);

-- insert sekcija

insert into razine(oznakarazine, cijena) values
('A', 0.80),
('B', 0.60),
('C', 0.40);

insert into parkirnamjesta(oznakamjesta, razina) values
(1,1), (2,1), (3,1), (4,1), (5,1), (6,1), (7,1), (8,1), (9,1),
(10,1), (11,1), (12,1), (13,1), (14,1), (15,1), (16,1), (17,1),
(18,1), (19,1), (20,1), (21,1), (22,1), (23,1), (24,1), (25,1);

insert into parkirnamjesta(oznakamjesta, razina) values
(1,2), (2,2), (3,2), (4,2), (5,2), (6,2), (7,2), (8,2), (9,2),
(10,2), (11,2), (12,2), (13,2), (14,2), (15,2), (16,2), (17,2),
(18,2), (19,2), (20,2), (21,2), (22,2), (23,2), (24,2), (25,2);

insert into parkirnamjesta(oznakamjesta, razina) values
(1,3), (2,3), (3,3), (4,3), (5,3), (6,3), (7,3), (8,3), (9,3),
(10,3), (11,3), (12,3), (13,3), (14,3), (15,3), (16,3), (17,3),
(18,3), (19,3), (20,3), (21,3), (22,3), (23,3), (24,3), (25,3);

insert into parkiranja(datumulaska, datumizlaska, parkirnomjesto, 
registarskaoznaka) values
('2025-04-15 14:10:05', '2025-04-15 15:33:02', 7, 'OS927LN'),
('2025-04-17 09:12:10', '2025-04-17 11:44:35', 21, 'OS648TT'),
('2025-04-26 12:06:45', '2025-04-26 16:02:14', 25, 'DJ221IK'),
('2025-05-07 22:04:18', '2025-05-07 23:45:11', 30, 'ZG742HI'),
('2025-05-12 07:52:11', '2025-05-12 10:11:38', 42, 'OS833EZ'),
('2025-05-19 16:00:32', '2025-05-20 06:46:55', 47, 'VU917MK'),
('2025-05-26 18:13:15', '2025-05-26 20:26:55', 53, 'OS147FD'),
('2025-06-01 23:15:51', '2025-06-02 02:33:07', 71, 'VK676BB');

select * from parkiranja;
