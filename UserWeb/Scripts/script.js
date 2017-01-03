var customersApp = angular.module('customersApp', ['ngGrid']);
customersApp.controller('customerCtrl', function ($scope, userRepository) { });
var url = 'http://localhost:24861/api/values';
//app.factory('MyFactory', function () {
//    return {
//        testfunction: function (text) {
//            return "Hello" + text;
//        }
//    }
//});
customersApp.factory('customerRepository', function ($http) {
    return {
        getCustomers: function (callback) {             
            $http.get(url).success(callback);            
        }
        ,
        //method for insert
        insertUser: function (callback, user) {
            // var user = { "id": user.id, "city": user.city, "name": user.name, "address": user.address, "contactNo": user.contactNo, "emailId": user.emailId };
            var user = { "UserId": user.UserId, "Username": user.Username, "Password": user.Password }
            $http.post(url, user).success(callback);
        }
            ,
        //method for update
        updateUser: function (callback, user) {
            var user = { "id": user.id, "city": user.city, "name": user.name, "address": user.address, "contactNo": user.contactNo, "emailId": user.emailId };
            $http.put(url + '/' + user.id, user).success(callback);
        }
        ,
        //method for delete
        deleteUser: function (callback, id) {
            $http.delete(url + '/' + id).success(callback);
        }


    }
});

customersApp.controller('customerCtrl', function ($scope, customerRepository) {
    getCustomers();
    function getCustomers() {
        customerRepository.getCustomers(function (results) {
            $scope.customerData = results;                      
        })
    }
    $scope.update = function () {
        customerRepository.insertUser(function () {          
            getCustomers();
        }, $scope.New)
    };

});