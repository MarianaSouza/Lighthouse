
$(document).ready(function(){
	$('#send').on('click',function(){
		var initials = $('#initials').val();
		var message = $('#message').val();
		$('ol').append("<li>" + initials + " " + message + "</li>");
		$('#message').val('');
		$('#initials').val('');
	});
});