Template.searchArtist.helpers({
	artists : function(){
		return Artists.find({name : {$regex : Session.get('searchArtist')}});
	}
});

Template.searchArtist.events({
	
	'click .artist':function(event){
		Session.set('selectedArtistId',event.target.attributes['artistId'].value);
		alert('oui');
	}
});