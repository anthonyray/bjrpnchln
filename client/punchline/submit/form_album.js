Template.formAlbum.helpers({
	albums : function() {
		return Albums.find({id_band: Session.get('selectedBandId')});
	}
});