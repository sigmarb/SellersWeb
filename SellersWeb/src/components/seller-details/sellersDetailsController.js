"use strict";

angular.module("project3App").controller("sellersDetailsController", ["$scope", "AppResource", "$routeParams",
function sellersDetailsController($scope, AppResource, $routeParams) {
    $scope.id = $routeParams.id;
	$scope.seller = {};
	var sellerID = parseInt($scope.id);

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
	});
}]);