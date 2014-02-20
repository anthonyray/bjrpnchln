Meteor.Router.add({
	'/explore' : 'punchlinesList',
	'/': {
		to : 'punchlinePage',
		and : function(){ Session.set('currentDate','01-02-2014'); }
	},
	'/punchline/:_punchLineDate' : {
		to : 'punchlinePage',
		and : function(punchLineDate) { Session.set('currentDate',punchLineDate);}
	}, 
	'/submit':'submitPunchline',
	'/administration' : 'administration'
	
});

Meteor.Router.filters({
	'requireLogin': function(page) {
		if (Meteor.user())
			return page;
		else if (Meteor.loggingIn())
			return 'loading';
		else
			return 'accessDenied';
	}
});

Meteor.Router.filter('requireLogin', {only: 'submitPunchline'});