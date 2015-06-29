$(document).ready(function(){

	$('#login').on('submit', function(e){
		e.preventDefault();

		var
		$this = $(this);

		if (validateThis($this)){

			postFormData($this, function(data){
				if (data.status) {
					console.log('все ок');
					//появление попапа саксес
				} else {
					console.log('что-то не так');
					//появление попапа ирор
				}
			});
		}
		
	});
	
});

function postFormData(form, successCallback) {
	var
		host        = form.attr('action'),
		reqFields   = form.find('[name]'),
		dataObject  = {};

	if (!host) {
		console.log('set action attribute to your form!');
	}

	reqFields.each(function(){
		var
			$this = $(this),
			value = $this.val(),
			name  = $this.attr('name');
			
		dataObject[name] = value;
	});

	console.log(dataObject);

	$.post(host, dataObject, successCallback);
};

/*Валидация*/

function validateThis(form) {

	var
		loginType = form.find("[data-validation='login']"),
		passType = form.find("[data-validation='pass']"),
		isValid = false;

	loginType.each(function(){

		var
			$this = $(this),
			notEmptyField = !!$this.val();

		if (notEmptyField) {
			isValid = true;
		} else {
			$this.tooltip({
				position : 'left',
				content : 'Введите логин'
			});
			$this.addClass("incorrect");

			isValid = false;
		}
	});

	passType.each(function(){

		var
			$this = $(this),
			notEmptyField = !!$this.val();

		if (notEmptyField) {
			isValid = true;
		} else {
			$this.tooltip({
				position : 'left',
				content : 'Введите пароль'
			});
			$this.addClass("incorrect");

			isValid = false;
		}
	});

	return isValid
};


$.fn.tooltip = function(options) {

	options = {
		position    : options.position || 'left',
		content     : options.content || 'Заполните поле'
	};

	var
		markup = '<div class="tooltip tooltip_' + options.position + '"> \
						<div class="tooltip__inner">' + options.content + '</div> \
					</div>';

	var
		$this = this,
		body = $('body');

	$this
		.addClass('tooltipstered')
		.attr('data-tooltip-position', options.position);

	body.append(markup);

	_positionIt($this, body.find('.tooltip').last(), options.position);


	
	
	$('input,textarea').on('click', function(){
		$(this).removeClass('incorrect');
		$('.tooltip').remove();

	});
	
	$(window).on('resize', function(){

		var
			tooltips = $('.tooltip');

		var
			tooltipsArray = [];

		tooltips.each(function(){
			tooltipsArray.push($(this));
		});

		$('.tooltipstered').each(function(index){
			var
				position = $(this).data('tooltip-position');

			_positionIt($(this), tooltipsArray[index], position);
		});

	});

	function _positionIt(elem, tooltip, position) {

		//измеряем элемент

		var
			elemWidth   = elem.outerWidth(true),
			elemHeight  = elem.outerHeight(true),
			topEdge     = elem.offset().top,
			bottomEdge  = topEdge + elemHeight,
			leftEdge    = elem.offset().left,
			rightEdge   = leftEdge + elemWidth;

		// измеряем тултип

		var
			tooltipWidth    = tooltip.outerWidth(true),
			tooltipHeight   = tooltip.outerHeight(true),
			leftCentered    = (elemWidth / 2) - (tooltipWidth / 2),
			topCentered     = (elemHeight / 2) - (tooltipHeight / 2);


		var positions = {};

		switch (position) {
			case 'right' :
				positions = {
					left : rightEdge,
					top : topEdge + topCentered
				};
				break;
			case 'top' :
				positions = {
					left: leftEdge + leftCentered,
					top : topEdge - tooltipHeight
				};
				break;
			case 'bottom' :
				positions = {
					left : leftEdge + leftCentered,
					top : bottomEdge
				};
				break;
			case 'left' :
				positions = {
					left : leftEdge - tooltipWidth,
					top : topEdge + topCentered
				};
				break;
		}

		tooltip
			.offset(positions)
			.css('display', 'inline-block');
	}


};