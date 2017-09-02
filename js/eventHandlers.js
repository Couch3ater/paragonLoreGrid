$(document).ready(function(){

	$('.hero-card').click(function(e){
		var hero = $(this).attr('class').split(/\s+/)[1];
		var cardID = $(this).attr('id');
		$('#hero-lore').addClass('open');
		$('#profile-pic').addClass(hero);
		
		$.getJSON("https://couch3ater.github.io/paragonLoreGrid/js/heroes.js")
		    .done(function( data ) {
		       alert(data);
		    });
		});

	$('#hero-lore').click(function(){
		this.className = '';
		$('#profile-pic').removeClass();
		//$('#bio').html();
	});

});