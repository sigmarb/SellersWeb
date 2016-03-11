"use strict";

angular.module("project3App").controller("sellersDetailsController", ["$scope", "AppResource", "$routeParams",
function sellersDetailsController($scope, AppResource, $routeParams) {
    $scope.id = $routeParams.id;
	$scope.seller = {};
	$scope.sellerProduct = [];
	$scope.sellerTop10Product = [];
	var sellerID = parseInt($scope.id);

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
	});

	AppResource.getSellerProducts(sellerID).success(function(sellerProduct)
	{
		$scope.sellerProduct = sellerProduct;
		sellerProduct.sort(compare);
		$scope.sellerTop10Product = sellerProduct.slice(0, 10);
	});

	//$scope.sellerTop10Product = $scope.sellerProduct.slice(0,10);

	function compare(a,b) 
	{
  		if (a.quantitySold > b.quantitySold) 
  		{
    		return -1;
  		}
  		else if (a.quantitySold  < b.quantitySold) 
  		{
    		return 1;
  		}
  		else 
  		{
    		return 0;
  		}
	}
}
]);