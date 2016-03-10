"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("#/seller/:id", {
		controller: "sellersDetailsController",
		templateUrl: "components/seller-deatails/sellersDetails.html"
	});

	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});

	//push
	$translateProvider.use("is");
});


/*"use strict";

angular.module("chatApp", ["ngRoute"]).config(["$routeProvider",
function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "src/login/login.html",
        controller: "LoginController"
    }).when("/roomlist/", {
        templateUrl: "src/roomlist/roomlist.html",
        controller: "RoomlistController"
    })
    .when("/room/:id/", {
        templateUrl: "src/room/room.html",
        controller: "RoomController"
    })
    .when("/room/:id", {
        templateUrl: "src/room/room.html",
        controller: "RoomController"
    });
}]);

ng-click="go('/alert_instance/{{ai.alert_instancne_id}}')

*/