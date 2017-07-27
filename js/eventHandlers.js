$(document).ready(function(){
	$('.hero-card').click(function(e){
		$('#hero-lore').addClass('open');
		var hero = $(this).attr('class').split(/\s+/)[1];
		$('#profile-pic').addClass(hero);
		var cardID = '#' + hero + '-card';
		$('#bio').html($(cardID).data('bio'));
	});

	$('#hero-lore').click(function(){
		this.className = '';
		$('#profile-pic').removeClass();
		$('#bio').html();
	});
});