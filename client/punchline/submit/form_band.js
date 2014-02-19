Template.formBand.helpers({
	bands : function(){
		return Bands.find({members : {$in : [Session.get('selectedArtistId')] } });
	}
});