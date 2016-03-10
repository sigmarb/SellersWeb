angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n</head>\r\n<body>\r\n	<main class=\"container-fluid\">\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n	<toaster-container></toaster-container>\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("components/loading-message/loading.html","<uib-alert type=\"info\">\r\n	<span translate=\"shared.LoadingMessage\"/>\r\n</uib-alert>");
$templateCache.put("components/seller-details/sellersDetails.html","<h1>HALLO</h1>\r\n<h3>okzzzz</h3>");
$templateCache.put("components/seller-dlg/seller-dlg.html","<div>\r\n		<h3>Template</h3>\r\n\r\n		<div>\r\n			<input types=\"text\" ng-model=\"seller.name\" placeholder=\"Name\"/>\r\n		</div>\r\n		<div>\r\n			<input types=\"text\" ng-model=\"seller.category\" placeholder=\"Category\" />\r\n		</div>\r\n		<div>\r\n			<input types=\"text\" ng-model=\"seller.imagePath\" placeholder=\"Image URL\"/>\r\n		</div>\r\n		<div>\r\n			{{errorMessage}}\r\n		</div>\r\n\r\n		<button class=\"btn btn-primary\" ng-click=\"onOk()\">\r\n			<span translate=\"sellers.Ok\"></span>\r\n		</button>\r\n		<button class=\"btn btn-primary\" ng-click=\"onCancel()\">\r\n			<span translate=\"sellers.Cancel\"></span>\r\n		</button>\r\n\r\n</div>");
$templateCache.put("components/sellers/index.html","<div ng-show=\"isLoading\">\r\n	<loading-message></loading-message>\r\n</div>\r\n<div ng-hide=\"isLoading\">\r\n	<button class=\"btn btn-primary\" ng-click=\"onAddSeller()\" ng-show=\"DisplayAdd\">\r\n<i class=\"fa fa-plus\"/>\r\n<span translate=\"sellers.Add\"/>\r\n</button>\r\n	<table>\r\n		<thead>\r\n			<tr table-sort=\"name\">\r\n				<th data-columnName=\"name\">\r\n				<i class=\"fa fa-plus\"/>\r\n					<span translate=\"sellers.Name\" ng-mouseover=\"sellers.Name\"/>\r\n				</th>\r\n				<th data-columnName=\"category\">\r\n					<span translate=\"sellers.Category\"/>\r\n				</th>\r\n				<th>\r\n					<span translate=\"sellers.Image\"/>\r\n				</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n			<tr ng-repeat=\"s in sellers | orderBy:predicate:reverse\">\r\n				\r\n				<td><a ng-href=\"#/seller/{{s.id}}\">{{s.name}}</a></td>\r\n				<td>{{s.category}}</td>\r\n				<td><img src=\"{{s.imagePath}}\" alt=\"error\" height=\"100\" width=\"100\"></td>\r\n				<td><button data=\"{{s.id}}\" class=\"btn btn-primary\" ng-click=\"onEditSeller(s.id)\" ng-show=\"DisplayAdd\">Edit</button>\r\n			</tr>\r\n		</tbody>\r\n	</table>\r\n</div>");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);