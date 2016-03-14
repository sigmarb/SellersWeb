"use strict";

angular.module("project3App").factory("editSellerDlg", 
	function editSellerDlg($uibModal)
	{
		return {
			show: function(){
				var modalInstance = $uibModal.open({
					templateUrl:"components/seller-dlg/editSeller-dlg.html",
					controller:"SellerDlgController"

				});
				return modalInstance.result;
			}
		};
	});