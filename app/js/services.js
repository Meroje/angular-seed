/* http://docs.angularjs.org/#!angular.service */

/**
 * App service which is responsible for the main configuration of the app.
 */
angular.service('myAngularApp', function($route, $location, $window) {

    $route.when('/buzz/:userId', {
		template : 'partials/buzz.html',
		controller : BuzzController
	});

	var self = this;

	$route.onChange(function() {
		if ($location.hash === '') {
			$location.updateHash('/buzz/');
			self.$eval();
		} else {
			$route.current.scope.params = $route.current.params;
			$window.scrollTo(0, 0);
		}
	});
}, {
	$inject : [ '$route', '$location', '$window' ],
	$eager : true
});

angular
		.service(
				'BuzzService',
				function($resource) {
					return $resource(
							'https://www.googleapis.com/buzz/v1/activities/:userId/:visibility/:activityId/:comments',
							{
								alt : 'json',
								callback : 'JSON_CALLBACK'
							}, {
								get : {
									method : 'JSON',
									params : {
										visibility : '@self'
									}
								},
								replies : {
									method : 'JSON',
									params : {
										visibility : '@self',
										comments : '@comments'
									}
								}
							});
				}, {
					$inject : [ '$resource' ]
				});