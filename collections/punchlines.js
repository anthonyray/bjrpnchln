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
	}
});