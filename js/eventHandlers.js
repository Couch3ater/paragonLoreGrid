$(document).ready(function(){
	var heroList = $.getJSON('heroes.json', function(json){
		console.log(json);
	});

	$('.hero-card').click(function(e){
		var hero = $(this).attr('class').split(/\s+/)[1];
		var cardID = alert($(this).attr('id'));
		$('#hero-lore').addClass('open');
		$('#profile-pic').addClass(hero);
	});

	$('#hero-lore').click(function(){
		this.className = '';
		$('#profile-pic').removeClass();
		//$('#bio').html();
	});
});