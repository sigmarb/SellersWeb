"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, centrisNotify) {

	$scope.product = {
		name: "",
		price: "",
        quantitySold: "",
        quantityInStock: "",
        imagePath: ""

	};
    
    $scope.setProducts = function setProducts(Name, Price, QSold ,QinStock, Image) {
        $scope.product.name = Name;
        $scope.product.price = Price;
        $scope.product.quantitySold = QSold;
        $scope.product.quantityInStock = QinStock;
        $scope.product.imagePath = Image;
    };
    
	$scope.onOk = function onOk(){
		//TODO: VALIDATION
		if ($scope.product.name.length === 0) {
			//$scope.errorMessage = "Invalid name!";
            centrisNotify.error("sellers.Messages.NoName", "sellers.Failed");
            return;
		}
        
        if ($scope.product.price.length === 0) {
            //$scope.errorMessage = "Invalid category!";
            centrisNotify.error("Invalid category!");
            return;
        }
        
        if ($scope.product.quantitySold.length === 0) {
            //$scope.errorMessage = "Invalid category!";
            centrisNotify.error("Invalid category!");
            return;
        }
        
        if ($scope.product.quantityInStock.length === 0) {
            //$scope.errorMessage = "Invalid category!";
            centrisNotify.error("Invalid category!");
            return;
        }
        
        if ($scope.product.imagePath.length === 0) {
            //$scope.errorMessage = "Invalid image url!";
            centrisNotify.error("Invalid image url!");
            return;
        }
		$scope.$close($scope.product);
	};

	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
		//lol
	};
}); 