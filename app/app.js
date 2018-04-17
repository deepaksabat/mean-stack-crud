(function() {
 'use strict';
 
 angular.module('app', [
 "ui.router"
 ])
 .config(function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise("/");
 
 $stateProvider.state("users", {
 url: "/",
 templateUrl: "/views/user/index.html",
 controller: "userController"
 }).state("create", {
 url: "/create",
 templateUrl: "/views/user/create.html",
 controller: "userController"
 }).state("edit", {
 url: "/edit/:id",
 templateUrl: "/views/user/create.html",
 controller: "userController"
 }).state("details", {
 url: "/details/:id",
 templateUrl: "/views/user/details.html",
 controller: "userController"
 });

 $stateProvider.state("students", {
 url: "/",
 templateUrl: "/views/student/index.html",
 controller: "studentController"
 }).state("studentcreate", {
 url: "/create",
 templateUrl: "/views/student/create.html",
 controller: "studentController"
 }).state("studentedit", {
 url: "/edit/:id",
 templateUrl: "/views/student/create.html",
 controller: "studentController"
 }).state("studentdetails", {
 url: "/details/:id",
 templateUrl: "/views/student/details.html",
 controller: "studentController"
 });
 })
 .constant("globalConfig", {
 apiAddress: 'http://localhost:3000/api'
 });
})();