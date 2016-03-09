"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

		$scope.isLoading = true;
		console.log(AppResource);
		var result = AppResource.getSellers();
		console.log(result);
		result.success(function(sellers)
		{
			$scope.sellers = sellers;
			$scope.isLoading = false;
		}).error(function(){
			$scope.isLoading = false;
		});

		$scope.onAddSeller = function onAddSeller()
		{

			SellerDlg.show().then(function(seller){
					AppResource.addSeller(seller).succcess(function(){
						var newSeller = seller;
					}).error(function() {
							//TODO:
							centrisNotify.error("sellers.Messages.SaveFailed");
				});
			});

			var PeterSellers = {
				name: "Peter Sellers",
				category: "Movies",
				imagePath: "http://celeb-true.com/images/peter-sellers/peter-sellers-03.jpg"

			};
			
		};
});