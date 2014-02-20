Template.punchlinesList.helpers({
	punchlines : function(){ 
		return Punchlines.find({}, {sort: {date: -1}}) ; 
	}
});