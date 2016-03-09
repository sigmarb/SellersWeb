"use strict";

angular.module("project3App").controller("SellersDlgController",
function SellersDlgController($scope) {

	$scope.seller = {
		name: "",
		category: "",

	};

	$scope.onOk = function onOk(){
		//TODO: VALIDATION
		if ($scope.seller.name.length === 0) {
			//birta validation skilaboð!
		}
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
		//lol
	};
}); 