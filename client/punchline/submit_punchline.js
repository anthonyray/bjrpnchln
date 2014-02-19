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
		Session.set('searchArtist',event.target.value);
	}
});