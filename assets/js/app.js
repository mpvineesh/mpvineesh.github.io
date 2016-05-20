

    // create the module and name it scotchApp
    var myApp = angular.module('myApp', ['ngRoute'])
	.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })
            // route for the about page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'aboutController'
            });
    })
	.directive('profileInfo', function() {
	  return {
		restrict: 'E',
		scope: {
		  customerInfo: '=info'
		},
		templateUrl: 'views/profile-info.html'
	  };
	})
	.directive('workExperience', function() {
	  return {
		restrict: 'E',
		scope: {
		  customerInfo: '=info'
		},
		templateUrl: 'views/work-experience.html'
	  };
	})
	.directive('skills', function() {
	  return {
		restrict: 'E',
		scope: {
		  customerInfo: '=info'
		},
		templateUrl: 'views/skills.html'
	  };
	})
	.directive('credits', function() {
	  return {
		restrict: 'E',
		scope: {
		  customerInfo: '=info'
		},
		templateUrl: 'views/credits.html'
	  };
	})
	.directive('aboutMe', function() {
	  return {
		restrict: 'E',
		scope: {
		  customerInfo: '=info'
		},
		templateUrl: 'views/about-me.html'
	  };
	});

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    myApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    myApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });