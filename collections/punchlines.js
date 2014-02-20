Punchlines = new Meteor.Collection('punchlines');

Meteor.methods({
	upvote: function(punchlineId) {
		var user = Meteor.user();

		if (!user){
			throw new Meteor.Error(401,"You need to login to upvote");
		}

		var punch = Punchlines.findOne(punchlineId);
		
		Punchlines.update(
			{ _id: punch._id, upvoters : {$ne : user._id} },
			{
				$addToSet: {upvoters: user._id},
				$inc : {upvote : 1}
			});
	},
	downvote: function(punchlineId) {
		var user = Meteor.user();
		var userId = Meteor.userId();

		if (!user){
			throw new Meteor.Error(401,"You need to login to upvote");
		}

		var punch = Punchlines.findOne(punchlineId);
		
		Punchlines.update(
			{ _id: punch._id, downvoters : {$ne : user._id} },
			{
				$addToSet: {downvoters: user._id},
				$inc : {downvote : 1}
			});
	}, 
	submit: function(punchlineAttributes){
		var user = Meteor.user();

		if(!user)
			throw new Meteor.Error('401','You need to be logged in to submit a punchline');

		if(!punchlineAttributes.punchline)
			throw new Meteor.Error(422, 'Please fill in a punchline');
		
		if(!punchlineAttributes.id_artist)
			throw new Meteor.Error(422, 'Please select an artist');
		
		if(!punchlineAttributes.id_band)
			throw new Meteor.Error(422, 'Please select a band');
		
		if(!punchlineAttributes.id_song)
			throw new Meteor.Error(422, 'Please select a song');
		
		if(!punchlineAttributes.id_album)
			throw new Meteor.Error(422, 'Please select an album');

		var punchline = _.extend(_.pick(punchlineAttributes, 'punchline', 'id_artist', 'id_album','id_song','id_band'), {
			date : '',
			upvote : 0,
			upvoters : [],
			downvote : 0,
			downvoters : [],
			tweets : 0,
			fbLikes : 0,
			allowed : false, 
			user_id : userId
		});

		var punchlineId = Punchlines.insert(punchline);

		return punchlineId;
	}
});