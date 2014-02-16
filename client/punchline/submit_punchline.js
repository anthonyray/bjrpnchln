Template.submitPunchline.helpers({
	artists : function(){
		return Artists.find();
	}
});

Template.submitPunchline.events({
	'change .selectArtist':function(event)
	{
		alert('wargfnin');
	}
});