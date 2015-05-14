// Angular script for instagram-search index.html
var DEBUG = true;

var App = angular.module('IGSearch', ['ngMessages', 'ngAnimate']);

App.controller('searchCtrl', function($scope, $http, $q) {
	$scope.resultCount = 0;
	$scope.query = "";
	$scope.results = [];
	$scope.searchDone = false;
	$scope.searching = false;
	$scope.searchFail = false;
	$scope.lastSearch = "";
	//
	$scope.searchPics = function() {
		if(DEBUG) console.log('making request to instagram');
		if(DEBUG) console.log($scope.igSearchForm);
		//
		$scope.searching = true;
		//
		if ($scope.igSearchForm.$valid) {
			$http({
				method: 'JSONP',
				url: "https://api.instagram.com/v1/tags/" + $scope.query + "/media/recent",
				params: {
					callback: 'JSON_CALLBACK',
					client_id: 'bf3cfd39c61e4f97b0b4ff6c28e6a130'
				}
			})
				.success(function(data, status){
					if(DEBUG) console.log('success');
					if(DEBUG) console.log(data);
					//
					$scope.results = data.data;
					$scope.searching  = false;
					$scope.searchDone = true;
					$scope.lastSearch = $scope.query;
					$scope.query      = "";
					//
					$scope.igSearchForm.$setPristine();
					$scope.igSearchForm.$setUntouched();
					document.getElementsByName('query')[0].focus();
				})
				.error(function(data, status){
					if(DEBUG) console.log(status);
					//
					$scope.searchFail = true;
				});
		}
	};
});

window.onload = document.getElementsByName('query')[0].focus();