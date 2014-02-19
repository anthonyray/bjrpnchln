Template.formSong.helpers({
	songs: function() {
		return Songs.find({id_album : Session.get('selectedAlbumId')});
	}
});