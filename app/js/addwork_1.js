
	var init = function(){
				console.log('Инициализация модуля addProject');
				_setUpListners();
			},
			_setUpListners = function (){
				$('#add-new-item').on('click', _showModal); // открыть модальное окно
				
			},
			_showModal = function (){
      	console.log('Вызов модального окна');
	      $('#new-progect-popup').bPopup({
	        speed: 650,
	        transition: 'slideDown',
	        onClose: function () {
	          this.find('.form').trigger("reset"); // сбрасываем форму
	        }
	      });
    	};
