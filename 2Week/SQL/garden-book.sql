--is for doing sql comments
--shcemas are like different discrete sections
--of our database.
--when we work in a schema, it allows tables
--to have the same name as tables in other schemas
--now, ever table is accessed by schemaname.tablename
--e.g garden_book.garden
drop schema if exists garden_book cascade;--we are nuking the entire schema
create schema garden_book;--then recreating it
set schema 'garden_book';--for rest of script, work in this schema

create table garden (
	--when making a table, first we write column name
	--then the type, then any constraints on the column
	garden_id serial primary key,
	username text, --be aware that varchar exists
	"password" text, --double quotes is used for ddl not for string data
	"name" text, --double quotes always have to be accessed with double quotes
	prettiness numeric(8,1) --first number is total digits, the second is number of allowed decimal places
	
	);

create table roles (
	role_id serial primary key,
	role_name text
);
--this will be junction/join for tables garden and roles
create table garden_roles (
	garden_id int4 references garden (garden_id),--we reference a table name, then a column in that tablename
	role_id int4 references roles (role_id),
	constraint garden_roles_PK primary key (garden_id, role_id)
	);

create table post(
	post_id serial primary key,
	author int4 references garden (garden_id),
	numlikes int4,
	body text
);

create table garden_post_likes(
	garden_id int4 references garden (garden_id),--we reference a table name, then a column in that tablename
	post_id int4 references post (post_id),
	constraint garden_post_likes_PK primary key (garden_id, post_id)	
);


insert into garden(username, "password", "name", prettiness)
	values('BigBaby', 'password', 'Babylon', 100),
		  ('MadisonRocks', 'password', 'Olbrich', 75),
		  ('BG', 'password', 'Botanical', 80),
		  ('Nope', 'password', 'Sam''s Garden', .5 ),
		  ('RednShiny', 'password', 'Grandma''s Tomato Garden', 101);

insert into roles(role_name) 
values ('Admin'), --strings in sql are single qouted
	   ('Moderator'),
	   ('User');

	  
insert into garden_roles 
	values(1,3),
		  (2,1),
		  (2,3),
		  (3,2),
		  (3,3),
		  (4,1),
		  (4,2),
		  (4,3),
		  (5,3);

insert into post(author, numlikes, body) 
	values(1, 10, 'GardenBook Rules'),
		  (4, 0, 'I am definitely Real!'),
		  (5, 100, 'I am definitely Real!'),
		  (1, 50, '<3 to all my gardens out there'),
		  (5, 200, 'I made some cookies to go with my tomatos'),
		  (4, 1, 'Really guys, I exist'),
		  (5, 50, '@Sam''s Garden is a very interesting ''garden'''),
		  (1, 500, 'Grandma''s Tomato Garden is the number 1 garden');
		 
		 
select AVG(numlikes), author from post group by author having avg(numlikes) > 100 order by avg(numlikes) desc limit 25 offset 1;
--limit and offset are how we do pagination
--pagination is the process of splitting up our data into pages
--we determine the size of a page with limit
--we determine the number of page we are on with offset
--pagination is very important as soon as you start dealing with real data sets