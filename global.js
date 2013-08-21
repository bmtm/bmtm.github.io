var date = null;

$(document).ready(function(){
	$('#meetings.hidden').click(function(){
		$(this).animate({height: 380}, 500, function(){
			$('#meetings').removeClass('hidden');
			$('#meetings iframe').prop('src', $('#meetings iframe').prop('src')); // refresh
		});
		return false;
	});
	
	// live broadcast if future date
	if(Date.parse){
		var datetext = $('#meetinginfo h1').attr('rel');
		date = Date.parse(datetext);
		var now = new Date();
		if(date > now){
			var datedisplay = 'on '+date.toString('MMM dS');
			var difference = parseInt(0.001*(date.getTime() - now.getTime()));
			if(difference < 43200000){ // 12 hours
				if(difference > 3600){

					var hours = Math.floor(difference/3600);
					var minutes = Math.floor((difference % 3600)/60);
					datedisplay = 'in '+hours+' Hours '+minutes+' Mins';
				}
				
			}
			$('#meetinginfo h1').html('Next Live Broadcast '+datedisplay);
		}
	}
});