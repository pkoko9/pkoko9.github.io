/* jshint devel:true */
$(document).ready(onReady); 

function onReady() {
	$('#userSubmit').on('click', onSubmitButtonClick);

	function onSubmitButtonClick() {
		
		$.post(
		'https://chatscape.herokuapp.com/chats.json', 
		{
			chat: {

				user: $('#userCreate').val(),

				message: $('#message').val(),

				// created_at: $('#timestamp').val(),

				// id: $('').val(),
			}
		},
			messageDisplay(message),
			getMessages(),
			'json'
			);
	}

	function messageDisplay(messages){
		console.log (messages);
		for (var i=0; i<messages.length; i++){
			$('.messagePost').prepend('<br></br><div>User: ' + messages[i].user +'</div><div>Message: '+ messages[i].message + '</div><div>Time: '+ messages[i].created_at + '<br></br></div>');
			}
		}
	function getMessages() {

			$.get(
			'https://chatscape.herokuapp.com/chats.json',

			function(message) {
				console.log(message);
				messageDisplay(message);
			},
			'json'
			);

	}
}


