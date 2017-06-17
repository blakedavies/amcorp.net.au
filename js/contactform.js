$('#gform').submit(function(e) {
	      e.preventDefault();
	      $.ajax({
	        url: "https://docs.google.com/a/blakedavies.net/forms/d/1p3dSZNHgv-_DM0GgDqPz5bTCO9V3eSgiPQ_Pv34QbI4/formResponse",
	        data: $(this).serialize(),
	        type: "POST",
	        dataType: "xml",
	        success: function(data) {
	          console.log('Submission successful');
	        },
	        error: function(xhr, status, error) {
	          console.log('Submission failed: ' + error);
	        }
	      });
	    });
	    $('#gform').on('submit', function(e) {
	  		$('#gform *').fadeOut(0);
	  		$('#contact-box *').fadeOut(0);
	  		$('#gform').prepend(
	    		'<div class="thank-you-box"><h3 class="thank-you">Thank-you.<h3><p class="thank-you">Your message has now been sent to Australian Merchandise Corporation.</p></div>'
	    	);
	  	});
