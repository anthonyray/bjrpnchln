Template.punchline.helpers({
	upvoteClass: function(){
		var userId = Meteor.userId();
		if (userId && ! _.include(this.upvoters,userId)){
			return 'upvoteable';
		}
		else
		{
			return 'disabled';
		}
	},
	downvoteClass: function(){
		var userId = Meteor.userId();
		if (userId && ! _.include(this.downvoters,userId)){
			return 'downvoteable';
		}
		else
		{
			return 'disabled';
		}
	}
});

Template.punchline.events({
	'click .upvote': function  (event) {
		event.preventDefault();
		Meteor.call('upvote',this._id);
	}, 
	'click .downvote': function(event){
		event.preventDefault();
		Meteor.call('downvote',this._id);
	}

});