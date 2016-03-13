"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg, $translate) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

		$scope.isLoading = true;
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
            centrisNotify.error("sellers.Messages.LoadFailed", "sellers.Failed");
		});

		function getSelectedUser(){
			return $scope.selectedUser;
		}

		$scope.onAddSeller = function onAddSeller()
		{
			SellerDlg.show().then(function(seller){
					AppResource.addSeller(seller).success(function(seller){
                        centrisNotify.success("sellers.Messages.SaveSucceeded", "sellers.Ok");
					}).error(function() {
							centrisNotify.error("sellers.Messages.SaveFailed", "sellers.Failed");
				});
			});

		};

		$scope.onEditSeller = function onEditSeller(sellerId)
		{
			SellerDlg.show().then(function(seller){
					AppResource.updateSeller(sellerId,seller).success(function(seller){
                        centrisNotify.success("sellers.Messages.EditUserSucceeded", "sellers.Ok");
					}).error(function() {
							centrisNotify.error("sellers.Messages.EditUserFailed", "sellers.Failed");
				});
			});
		};

		$scope.changeLanguage = function changeLanguage(key){
			$translate.use(key);
		};
});