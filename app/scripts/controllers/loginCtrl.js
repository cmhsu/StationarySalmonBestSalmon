app
  .controller('loginCtrl', ['$scope', 'UserService', '$location', '$cookies', 
    function($scope, UserService, $location, $cookies) {

    $scope.login = function(){
      var user = {
        username: $scope.username,
        password: $scope.password
      };
      UserService.login(user).then(function(response){
        $cookies.put('user',user.username);
        $cookies.put('token',response.data.token);
        $location.path('/');
      });
    };

  }]);