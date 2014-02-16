Template.punchlinePage.helpers({
	currentPunchline: function(){
		var punch = Punchlines.findOne({date: Session.get('currentDate')});
		punch.artist = Artists.findOne(punch.id_artist);
		punch.album = Albums.findOne(punch.id_album);
		punch.song = Songs.findOne(punch.id_song);
		punch.band = Bands.findOne(punch.id_band);
		return punch;
	}
});