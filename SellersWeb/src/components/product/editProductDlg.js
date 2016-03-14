"use strict";

angular.module("project3App").factory("editProductDlg", 
	function editProductDlg($uibModal)
	{
		return {
			show: function(){
				var modalInstance = $uibModal.open({
					templateUrl:"components/product/editProduct-dlg.html",
					controller:"ProductDlgController"

				});
				return modalInstance.result;
			}
		};
});