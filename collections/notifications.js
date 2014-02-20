Notifications = new Meteor.Collection('notifications');

Meteor.methods({
	acknowledge : function(notificationId){
		Notifications.find({_id : notificationId}).update({ack : true});
	}, 

	createPunchlineNotification : function(punchline){
		Notifications.insert({
			ack : false, 
			user_id : punchline.user_id,
			punchline_id : punchline._id
		});
	}
});