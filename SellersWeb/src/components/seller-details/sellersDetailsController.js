"use strict";

angular.module("project3App").controller("sellersDetailsController", ["$scope", "AppResource", "$routeParams",
function sellersDetailsController($scope, AppResource, $routeParams) {
    $scope.id = $routeParams.id;
	$scope.seller = {};
	$scope.sellerProduct = [];
	var sellerID = parseInt($scope.id);

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
	});

	AppResource.getSellerProducts(sellerID).success(function(sellerProduct)
	{
		$scope.sellerProduct = sellerProduct;
	});
}




]);