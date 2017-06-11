$('#gform').submit(function(e) {
	      e.preventDefault();
	      $.ajax({
	        url: "https://docs.google.com/forms/d/e/1FAIpQLSehItCBxxXwyzSVhB35Ao9Zkl9G0vDtSEzlR8zknRQWFtp9dw/formResponse",
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
	    		'<div class="thank-you-box"><h3 class="thank-you">Thank-you!!<h3><p class="thank-you">Your message has been submitted successfully and you will receive a reply within 48 hours.</p></div>'
	    	);
	  	});