document.addEventListener('deviceready', init, false);
function init() {

	document.querySelector('#sendMessage').addEventListener('touchend', function() {
		var number = document.querySelector('#number').value;
		var message = document.querySelector('#message').value;
		var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
            //intent: 'INTENT'  // send SMS with the native android SMS messaging
            intent: '' // send SMS without open any other app
        }
    };

		console.log('going to send ' + message + ' to ' + number);

		//simple validation for now
		if (number === '' || message === '') return;

		sms.send(number, message, options, function(message) {
			console.log('success: ' + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log('error: ' + error.code + ' ' + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});

	}, false);

}
