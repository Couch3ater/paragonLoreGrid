$(document).ready(function(){

	$('.hero-card').click(function(e){
		var heroClicked = $(this).attr('class').split(/\s+/)[1];
		var cardID = $(this).attr('id');
		var heroBio = null;
		$('#hero-lore-background').addClass('open');
		$('#hero-lore').addClass('open');
		$('#profile-pic').addClass(heroClicked);
		
		$.getJSON("https://couch3ater.github.io/paragonLoreGrid/js/heroes.json")
	    	.done(function( data ) {
	    		for(homie in data.heroes.hero){
	    			if(heroClicked == data.heroes.hero[homie].name){
	    				heroBio = data.heroes.hero[homie].bio;
	    				$('#bio').html(heroBio);
	    				break;
	    			}
	    		}
			});
		});

	$('#hero-lore').click(function(){
		this.className = '';
		$('#hero-lore-background').removeClass('open');
		$('#profile-pic').removeClass();
		$('#bio').html();
	});

	$('#hero-lore-background').click(function(){
		this.className = '';
		$('#hero-lore').removeClass('open');
		$('#profile-pic').removeClass();
		$('#bio').html();
	});

});