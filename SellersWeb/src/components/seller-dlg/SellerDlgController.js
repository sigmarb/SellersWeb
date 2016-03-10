"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, centrisNotify) {

	$scope.seller = {
		name: "",
		category: "",
        imagePath: ""

	};
    
    $scope.setSellers = function setSellers(Name, Category, Image) {
        $scope.seller.name = Name;
        $scope.seller.category = Category;
        $scope.seller.imagePath = Image;
    };
    
	$scope.onOk = function onOk(){
		//TODO: VALIDATION
		if ($scope.seller.name.length === 0) {
			//$scope.errorMessage = "Invalid name!";
            centrisNotify.error("sellers.Messages.NoName", "sellers.Failed");
            return;
		}
        
        if ($scope.seller.category.length === 0) {
            //$scope.errorMessage = "Invalid category!";
            centrisNotify.error("Invalid category!");
            return;
        }
        
        if ($scope.seller.imagePath.length === 0) {
            //$scope.errorMessage = "Invalid image url!";
            centrisNotify.error("Invalid image url!");
            return;
        }
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
		//lol
	};
}); 