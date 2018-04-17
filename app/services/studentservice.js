(function() {
 'use strict';
 
 angular
 .module('app')
 .factory('studenetService', Service);
 
 Service.$inject = ['$http', 'globalConfig'];
 
 function Service($http, globalConfig) {
 var url = "";
 return {
 getStudents: function() {
 url = globalConfig.apiAddress + "/student";
 return $http.get(url);
 },
 getStudent: function(id) {
 url = globalConfig.apiAddress + "/student/" + id;
 return $http.get(url);
 },
 createStudent: function(student) {
 url = globalConfig.apiAddress + "/student";
 return $http.post(url, student);
 },
 updateStudent: function(student) {
 url = globalConfig.apiAddress + "/student/" + student._id;
 return $http.put(url, student);
 },
 deleteStudent: function(id) {
 url = globalConfig.apiAddress + "/student/" + id;
 return $http.delete(url);
 }
 };
 }
})();