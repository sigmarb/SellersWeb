"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope) {

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
			$scope.errorMessage = "Invalid name!";
		}
        
        if ($scope.seller.category.length === 0) {
            $scope.errorMessage = "Invalid category!";
        }
        
        if ($scope.seller.imagePath.length === 0) {
            $scope.errorMessage = "Invalid image url!";
        }
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
		//lol
	};
}); 