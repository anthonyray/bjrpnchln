if (Punchlines.find().count() === 0)
{

	var nekId = Artists.insert({name : "Nekfeu"});
	var alphId = Artists.insert({name : "Alpha Wann"});

	var ninetyfiveId = Bands.insert({name : "1995", members : [nekId,alphId] });
	var sCrewId = Bands.insert({name : "S-Crew", members : [nekId] });

	var albumId = Albums.insert({title : "Paris Sud Minute", id_band : ninetyfiveId});
	
	var song1Id = Songs.insert({title : "Flotte Mais Jamais Ne Sombre", id_album : albumId});
	var song2Id = Songs.insert({title : "Pleure Salope",id_album : albumId});
	var song3Id = Songs.insert({title : "JetLag",id_album : albumId});



	Punchlines.insert({
		date : '01-02-2014',
		punchline : "Même si ma voix traverse l'océan comme une jeune fille au pair, ma vie part en lambeaux comme un jeune millionaire",
		id_artist : nekId,
		id_band : ninetyfiveId,
		id_song : song1Id, 
		id_album : albumId, 
		youTubeLink : "http://www.youtube.com",
		upvote : 0,
		upvoters : [],
		downvote : 0,
		downvoters : [],
		tweets : 0,
		fbLikes : 0
	});
	Punchlines.insert({
		date : '02-02-2014',
		punchline : "Ce qui me fait vivre me tue, je respire ce truc, comme un oxygène empoisoné",
		id_artist : alphId,
		id_band : ninetyfiveId,
		id_song : song3Id, 
		id_album : albumId, 
		youTubeLink : "http://www.youtube.com",
		upvote : 0,
		upvoters : [],
		downvote : 0,
		downvoters : [],
		tweets : 0,
		fbLikes : 0
	});
	Punchlines.insert({
		date : '03-02-2014',
		punchline : "Pleure comme une petite fille, si t'as agis comme une grande pute, le boomerang revient quand tu ne l'attends plus.",
		id_artist : alphId,
		id_band : ninetyfiveId,
		id_song : song2Id, 
		id_album : albumId, 
		youTubeLink : "http://www.youtube.com",
		upvote : 0,
		upvoters : [],
		downvote : 0,
		downvoters : [],
		tweets : 0,
		fbLikes : 0
	});
}