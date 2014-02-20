Template.notifications.helpers({
	notificationsCount : function(){
		return Notifications.find({user_id:Meteor.userId(), ack: false}).count();
	}
});