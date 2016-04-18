var fbRef = new Firebase("https://sigmachigp.firebaseio.com/");
var broRef = fbRef.child('users');

(function(){
    var app = angular.module('store', ['firebase']);
    
    app.controller('MyController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
        $scope.users = $firebaseArray(broRef);
        
        
        $scope.addBro = function(){
            $scope.users.$add({fullname: 'God', housing: 2000});  
        };
        
        $scope.updateBro = function(user){
            var bro = $scope.users.$$getKey(user);
            var userEdit = $scope.users.$getRecord(bro);
            console.log
            userEdit.housing = user.housing;
            $scope.users.$save(userEdit);
            
        };
        
    }]);
        
})();