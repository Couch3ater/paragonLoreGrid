$(document).ready(function(){

	$('.hero-card').click(function(e){
		var hero = $(this).attr('class').split(/\s+/)[1];
		var cardID = $(this).attr('id');
		$('#hero-lore').addClass('open');
		$('#profile-pic').addClass(hero);

		var heroList = $.getJSON('js/heroes.js', function(json){
			console.log(json);
		});
	});

	$('#hero-lore').click(function(){
		this.className = '';
		$('#profile-pic').removeClass();
		//$('#bio').html();
	});
});