(function(){
'use strict';
angular.module("mainApp")
.controller("homeController", function($scope,$http) {
   $scope.projects=['Project1','Project2','Project3'];
   
   $scope.testAPI = function(projectName){
	   
	   $scope.results=[];
		   
	   if(projectName === 'Project1'){
		   
		   $http({
			   method: 'GET',
			   url: 'http://nge-env2-asm.wdw.disney.com:8080/assembly/heart-beat'
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service1',status:false});
			   });
		   
		   $http({
			   method: 'GET',
			   url: 'https://jsonplaceholder.typicode.com/posts/1'
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service2',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service2',status:false});
			   });
		   
		   $http({
			   method: 'GET',
			   url: 'http://www.omdbapi.com/?t='+projectName
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service3',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service3',status:false});
			   });
	   }
	   
	   if(projectName === 'Project2'){
		   $http({
			   method: 'GET',
			   url: 'http://www.omdbapi.com/?t='+projectName
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service1',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service1',status:false});
			   });
		   
		   $http({
			   method: 'GET',
			   url: 'https://jsonplaceholder.typicode.com/posts/1'
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service2',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service2',status:false});
			   });
		   
	   }
	   
	   if(projectName === 'Project3'){
		   $http({
			   method: 'GET',
			   url: 'http://www.omdbapi.com/?t='+projectName
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service1',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service1',status:false});
			   });
		   
		   $http({
			   method: 'GET',
			   url: 'https://jsonplaceholder.typicode.com/posts/1'
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service2',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service2',status:false});
			   });
		   
		   $http({
			   method: 'GET',
			   url: 'http://www.omdbapi.com/?t='+projectName
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service3',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service3',status:false});
			   });
		   
		   $http({
			   method: 'GET',
			   url: 'https://jsonplaceholder.typicode.com/posts/1'
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service4',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service4',status:false});
			   });
		   
		   $http({
			   method: 'GET',
			   url: 'http://www.omdbapi.com/?t='+projectName
			 }).then(function successCallback(response) {
				 $scope.results.push({name:'Service5',status:true});
			   }, function errorCallback(response) {
				   $scope.results.push({name:'Service5',status:false});
			   });
		   
	   }
	   
   };
});
})();
