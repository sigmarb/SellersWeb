"use strict";

angular.module("project3App").controller("sellersDetailsController", ["$scope", "AppResource", "$routeParams", "ProductDlg",
function sellersDetailsController($scope, AppResource, $routeParams, ProductDlg) {
    $scope.id = $routeParams.id;
	$scope.seller = {};
	$scope.sellerProduct = [];
	$scope.sellerTop10Product = [];
    $scope.DisplayAdd = true;
    $scope.isLoading = true;
    $scope.selectedProduct = {
        name: "",
        price: "",
        quantitySold: "",
        quantityInStock: "",
        imagePath: ""
    };
	$scope.sellerTop10Product = [];
	var sellerID = parseInt($scope.id);
    
    function getSelectedProduct() {
        return $scope.selectedProduct;
    }

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
        $scope.isLoading = false;
	}).error(function(){
        $scope.isLoading = false;
    });

	AppResource.getSellerProducts(sellerID).success(function(sellerProduct)
	{
		$scope.sellerProduct = sellerProduct;
		sellerProduct.sort(compare);
		$scope.sellerTop10Product = sellerProduct.slice(0, 10);
        $scope.isLoading = false;
	}).error(function(){
        $scope.isLoading = false;
    });

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
    
    $scope.onAddProduct = function onAddProduct(sellerID) {
        $scope.DisplayAdd = false;
        ProductDlg.show().then(function(product){
            AppResource.addSellerProduct(sellerID, product).success(function(product){
                $scope.DisplayAdd = true;
            }).error(function(){
                //TODO
            });
        });
    };
    
}]);
	//$scope.sellerTop10Product = $scope.sellerProduct.slice(0,10);