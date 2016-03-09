"use strict";

angular.module("project3App").factory("SellerDlg", 
	function SellerDlg($uibModal)
	{
		return {
			show: function(){
				var modalInstance = $uibModal.open({
					templateURL:"src/components/seller-dlg.html",
					controller:"SellerDlgController"

				});
				return modalInstance.result;
			}
		};
	});