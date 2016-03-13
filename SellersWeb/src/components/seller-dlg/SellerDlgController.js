"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, centrisNotify, $translate) {

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
		if ($scope.seller.name.length === 0) {
            centrisNotify.error("sellers.Messages.NoName", "sellers.Failed");
            return;
		}
        
        if ($scope.seller.category.length === 0) {
            centrisNotify.error("sellers.Messages.NoCategory", "sellers.Failed");
            return;
        }
        
        if ($scope.seller.imagePath.length === 0) {
            centrisNotify.error("sellers.Messages.NoImage", "sellers.Failed");
            return;
        }
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
	};
}); 