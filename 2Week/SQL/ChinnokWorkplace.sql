set schema 'garden_book';
select * from "Artist";

select * from "Track" where "Name" like 'O%' ;--this will match any string that starts with Capital O and any number of following characters

select * from "Track" where "Name" not like '%l%m';

--this query will get us AC/DCs artist id
select "ArtistId" from "Artist" where "Name" = 'AC/DC';

--this query will get us all albums by AC/DC
select * from "Album" where "ArtistId" = 
	(select "ArtistId" from "Artist" where "Name" = 'AC/DC');
	

select * from "Track" where "AlbumId" in 
	(select "AlbumId" from "Album" where "ArtistId" = 
		(select "ArtistId" from "Artist" where "Name" = 'AC/DC'));


	
select count(*) from "Track" where "TrackId" in 
	(select "TrackId" from "PlaylistTrack" where "PlaylistId" in 
		(select "PlaylistId" from "PlaylistTrack" where "TrackId" in 
			(select "TrackId" from "Track" where "AlbumId" in 
				(select "AlbumId" from "Album" where "ArtistId" = 
					(select "ArtistId" from "Artist" where "Name" = 'AC/DC'))))) 
and "TrackId" not in (select "TrackId" from "Track" where "AlbumId" in 
	(select "AlbumId" from "Album" where "ArtistId" = 
		(select "ArtistId" from "Artist" where "Name" = 'AC/DC')))	