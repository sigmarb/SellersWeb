"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg, $translate) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

		$scope.isLoading = true;
		$scope.DisplayAdd = true;
		$scope.selectedUser = {
			name: "",
			category: "",
			imagePath: ""
		};


		var result = AppResource.getSellers();
		console.log(result);
		result.success(function(sellers)
		{
			$scope.sellers = sellers;
			$scope.isLoading = false;
		}).error(function(){
			$scope.isLoading = false;
		});

		function getSelectedUser(){
			return $scope.selectedUser;
		}

		$scope.onAddSeller = function onAddSeller()
		{
			$scope.DisplayAdd = false;
			SellerDlg.show().then(function(seller){
					AppResource.addSeller(seller).success(function(seller){
						//var newSeller = seller;
						$scope.DisplayAdd = true;
					}).error(function() {
							//TODO:
							centrisNotify.error("sellers.Messages.SaveFailed");
				});
			});

		};

		$scope.onEditSeller = function onEditSeller(sellerId)
		{
			$scope.DisplayAdd = false;
			SellerDlg.show().then(function(seller){
					AppResource.updateSeller(sellerId,seller).success(function(seller){
						//var newSeller = seller;
						$scope.DisplayAdd = true;
					}).error(function() {
							//TODO:
							centrisNotify.error("sellers.Messages.EditUserFailed");
				});
			});
		};

		$scope.changeLanguage = function changeLanguage(key){

			$translate.use(key);
		};
});