(function() {
 'use strict';
 
 angular
 .module('app')
 .controller('studentController', Controller);
 
 Controller.$inject = ['$scope', '$rootScope', 'studenetService', '$state', '$stateParams'];
 
 function Controller($scope, $rootScope, studenetService, $state, $stateParams) {
 $scope.students = [];

 $scope.student = {
                availableOptions: [
                    {id:'male',name:"Male"},
                    {id:'female',name:"Female"}
                ],
                gender:null
          };
 
 if ($state.current.name == "students") {
 $rootScope.Title = "Student Listing";
 studenetService.getStudents().then(function(res) {
 $scope.students = res.data;
 }).catch(function(err) {
 console.log(err);
 });
 
 $scope.deleteStudent = function(id) {
 if (confirm('Are you sure to delete?')) {
 studenetService.deleteStudent(id).then(function(res) {
 if (res.data == "deleted") {
 $state.go("students", {}, { reload: true });
 }
 }).catch(function(err) {
 console.log(err);
 });
 }
 };
 } else if ($state.current.name == "studentedit") {
 $rootScope.Title = "Edit Student";
 var id = $stateParams.id;
 studenetService.getStudent(id).then(function(res) {
 $scope.student = res.data;
 }).catch(function(err) {
 console.log(err);
 });
 
 $scope.saveData = function(student) {
 if ($scope.studentForm.$valid) {
 studenetService.updateStudent(student).then(function(res) {
 if (res.data == "updated") {
 $state.go("students");
 }
 }).catch(function(err) {
 console.log(err);
 });
 }
 };
 } else if ($state.current.name == "studentcreate") {
 $rootScope.Title = "Create Student";
 $scope.saveData = function(student) {
 $scope.IsSubmit = true;
 if ($scope.studentForm.$valid) {
 studenetService.createStudent(student).then(function(res) {
 if (res.data == "created") {
 $state.go("students");
 }
 }).catch(function(err) {
 console.log(err);
 });
 }
 };
 }
 }
})();