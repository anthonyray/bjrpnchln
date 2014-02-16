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
	'/submit':'submitPunchline'
	
});