Template.administration.helpers({
	newPunchlines : function(){
		return Punchlines.find({allowed : false});
	},

	newPunchlinesNumber : function(){
		return Punchlines.find({allowed : false}).count();
	}
});