var screenWidth = $(window).width(),
	imgHeader = $('.contHeader_img img');

$(document).ready(function () {
	
	var input = $('#registro .form-group input');

	input.focus( function() {

		$(this).parent().addClass('input-activo');


	});



	input.focusout(function() {
		$(this).parent().removeClass('input-activo');

		if ( $(this).val() != '' ){

		$(this).parent().addClass('input-activo');
			console.log( ' valor '+ $(this).val() )
			
		}

	});

	var cont_contador = $( ".cont_contador" );
	var position = cont_contador.position();
	$('.ir-abajo').click(function(){
		$('body, html').animate({
			scrollTop: position.top+'px'
		}, 300);
	});


	if (screenWidth <= 1680 ) {	

		imgHeader.attr('src','images/curvaHeader.png');

	};

	if (screenWidth <= 1200 ) {	

		imgHeader.attr('src','images/curvaHeader-2.png');

	};

	if (screenWidth <= 760 ) {	

		imgHeader.attr('src','images/curvaHeader-3.png');

	};

	if (screenWidth <= 400 ) {	

		imgHeader.attr('src','images/curvaHeader-4.png');

	};




});

