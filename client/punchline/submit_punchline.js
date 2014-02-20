Template.submitPunchline.helpers({

});

Template.submitPunchline.events({

	'keypress .searchArtist':function(event)
	{
		Session.set('searchArtist',event.target.value);
	},
	'click .selectBand' : function(event)
	{
		Session.set('selectedBandId',event.target.value);
	}, 

	'click .selectSong':function(event)
	{
		Session.set('selectedSongId',event.target.value);
	},

	'click .selectAlbum':function(event)
	{
		Session.set('selectedAlbumId',event.target.value);
	}, 
	'submit form': function(event)
	{
		event.preventDefault();
		var punchline = {
			punchline : $(event.target).find('[name=punchline]').val(), 
			id_artist : Session.get('selectedArtistId'),
			id_band : Session.get('selectedBandId'),
			id_song : Session.get('selectedSongId'), 
			id_album : Session.get('selectedAlbumId'),
		}
		Meteor.call('submit',punchline,function(error,id){
			if (error)
				return alert(error.reason);

			Meteor.Router.to('/');
		});
	}
});