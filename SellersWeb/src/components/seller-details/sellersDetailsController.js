"use strict";

angular.module("project3App").controller("sellersDetailsController", ["$scope", "AppResource", "$routeParams", "ProductDlg", "centrisNotify", "$translate", "editProductDlg",
function sellersDetailsController($scope, AppResource, $routeParams, ProductDlg, centrisNotify, $translate, editProductDlg) {
    $scope.id = $routeParams.id;
	$scope.seller = {};
	$scope.sellerProduct = [];
	$scope.sellerTop10Product = [];
    $scope.DisplayAdd = true;
    $scope.isLoading = true;
    $scope.alert = [];
    $scope.selectedProduct = {
        name: "",
        price: "",
        quantitySold: "",
        quantityInStock: "",
        imagePath: ""
    };

    $scope.changeLanguage = function changeLanguage(key){
        $translate.use(key);
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
        centrisNotify.error("sellers.Messages.LoadFailed", "sellers.Failed");
    });

	AppResource.getSellerProducts(sellerID).success(function(sellerProduct)
	{
		$scope.sellerProduct = sellerProduct;
		sellerProduct.sort(compare);
		$scope.sellerTop10Product = sellerProduct.slice(0, 10);
        $scope.isLoading = false;
        if($scope.sellerProduct.length === 0) {
            $scope.alert.push({type: 'danger'});
        }
	}).error(function(){
        $scope.isLoading = false;
        centrisNotify.error("sellerDetails.Messages.LoadFailed", "sellerDetails.Failed");
    });
    
     $scope.closeAlert = function(index) {
        $scope.alert.splice(index, 1);
    };

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
        $scope.isLoading = false;
        centrisNotify.success("sellerDetails.Messages.SaveSucceeded", "sellerDetails.Ok");
     }).error(function(){
                centrisNotify.error("sellerDetails.Messages.SaveFailed", "sellerDetails.Failed");
            });
        });
    };
    
    $scope.onUpdateProduct = function onUpdateProduct(productID) {
        editProductDlg.show().then(function(product){
            AppResource.updateSellerProduct(productID.id, product).success(function(product) {
                centrisNotify.success("sellerDetails.Messages.EditProductSucceeded", "sellerDetails.Ok");
	}).error(function(){
                centrisNotify.error("sellerDetails.Messages.EditProductFailed", "sellerDetails.Failed");
            });
       });
    };
    
}]);
	//$scope.sellerTop10Product = $scope.sellerProduct.slice(0,10);