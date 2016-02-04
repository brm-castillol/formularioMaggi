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



});

//btn-ir

$(document).ready(function(){
	var cont_contador = $( ".cont_contador" );
	var position = cont_contador.position();
	$('.ir-abajo').click(function(){
		$('body, html').animate({
			scrollTop: position.top+'px'
		}, 300);
	});
  
});