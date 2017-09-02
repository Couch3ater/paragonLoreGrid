$(document).ready(function(){

	$('.hero-card').click(function(e){
		var heroClicked = $(this).attr('class').split(/\s+/)[1];
		var cardID = $(this).attr('id');
		$('#hero-lore').addClass('open');
		$('#profile-pic').addClass(heroClicked);
		
		$.getJSON("https://couch3ater.github.io/paragonLoreGrid/js/heroes.json")
	    	.done(function( data ) {
	    		for(homie in data.heroes.hero){
	    			if(heroClicked == data.heroes.hero[homie].name){
	    				alert("you selected: " + data.heroes.hero[homie].name);
	    			}
	    		}
			});
		});

	$('#hero-lore').click(function(){
		this.className = '';
		$('#profile-pic').removeClass();
		//$('#bio').html();
	});

});