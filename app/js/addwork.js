$(document).ready(function(){
	 $('#add-new-item').on('click touchstart', function(e) {
	       e.preventDefault();
	       $('#new-progect-popup').bPopup({
	       	modalColor: '#3ba8c0',
	       	speed: 500,
	       	transition: 'slideDown'
	       });
	    });
	
});
