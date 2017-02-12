var app = angular.module("RaxTstTbl",[]);


app.controller("MainTblCtrl", function($scope, $http) {
    $scope.sortType =       'id';
    $scope.sortReverse =    false;
    $scope.searchBody =     '';

    var obj = this;
    obj.testSuiteWorksVar = 'it works!';


    $http.get('http://jsonplaceholder.typicode.com/posts').
        then(function(data) {
            $scope.data_struct = data;
        console.log($scope.data_struct);
    }, function errCallBack(response) {
        // handle errors here
    });
});