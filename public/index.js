/* Copyright (C) Wenbin Yan - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Wenbin Yan <yanbzybzy3@gmail.com>, May 2017
 */

var app = angular.module('GreenLeavesTCM', []);
app.controller('IndexPageController', function($scope) {
    $scope.name = "John Doe";
    $scope.phoneNumber = "020 7228 5599";
});
