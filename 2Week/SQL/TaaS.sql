--why make a new schema?
--it so I can have my tables in a different section of the db
drop schema if exists "TaaS" cascade;
create schema "TaaS";
set schema 'TaaS';

create table gps_location(
	gps_location_id serial primary key,
	gps_location point--special datatype the store 2 8byte floats as an x,y point
);

create table trains(
	train_id serial primary key,
	train_name text,
	top_speed numeric(10,2),
	avg_speed numeric(10,2),
	capacity int,
	unscheduled_downtime int,--on your own time, look into using the interval datatype for measuring between two times 
	maintenance_downtime int,
	gps_location int4 references gps_location(gps_location_id)--FK is int 4 because that is the int size serial uses
	);

create table "location"(
	location_id serial,
	gps_location int4 references gps_location(gps_location_id),--Remember, if you see references, it means it is a Foreign Key
	location_name text,
	location_address text,
	is_stop bool,
	constraint location_pk primary key (location_id)
	);

create table routes(
	train_id int4 references trains(train_id),
	location_id int4 references "location"(location_id),
	route_time TIME,
	ticket_price numeric(6,2),
	constraint routes_pk primary key (train_id, location_id)
);




insert into gps_location (gps_location) 
values ('(1,2)'),--this will be UK
	   ('(0,0)'),--Origin of all trains
	   ('(2,1)');--This is France

insert into trains(train_name, top_speed, avg_speed, capacity,unscheduled_downtime,maintenance_downtime, gps_location)
values('Hitachi Prime', 160, 80, 1000, 10, 1000, 2 );

insert into "location" (gps_location, location_name, location_address, is_stop)
values(1, 'Folkstone, Kent', 'Near London', true),
	  (3, 'Coquelles, Pas-de-Calais', 'Northern France', true);

insert into routes
values(1,1,'10:38:52', 35),
	  (1,2,'10:48:54',55);

select now();