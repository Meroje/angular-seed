/* http://docs.angularjs.org/#!angular.widget */

angular.widget('my:expand', function(element) {
    element.css('display', 'block');
	this.descend(true);
	return function(element) {
		element.hide();
		var watch = element.attr('expand');
		this.$watch(watch, function(value) {
			if (value) {
				element.delay(0).slideDown('slow');
			} else {
				element.slideUp('slow');
			}
		});
	};
});