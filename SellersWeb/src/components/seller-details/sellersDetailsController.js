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
    
    $scope.onAddProduct = function onAddProduct() {
        console.log("HERNA!");
        $scope.DisplayAdd = false;
        ProductDlg.show().then(function(product){
            console.log("BLA!");
            console.log(product);
            AppResource.addSellerProduct(sellerID, product).success(function(product){
                AppResource.getSellerProducts(sellerID).success(function(sellerProduct)
	{
		$scope.sellerProduct = sellerProduct;
		sellerProduct.sort(compare);
		$scope.sellerTop10Product = sellerProduct.slice(0, 10);
        $scope.isLoading = false;
	}).error(function(){
        $scope.isLoading = false;
    });
        
        $scope.DisplayAdd = true;
        $scope.isLoading = false;
     }).error(function(){
                console.log("ERROIR");
                //TODO
            });
        });
    };
    
    $scope.onUpdateProduct = function onUpdateProduct(productID) {
        console.log(productID);
        ProductDlg.show().then(function(product){
            console.log(product);
            AppResource.updateSellerProduct(productID.id, product).success(function(product) {
         console.log("HER" + product);
	}).error(function(){
            });
       });
    };
    
}]);
	//$scope.sellerTop10Product = $scope.sellerProduct.slice(0,10);