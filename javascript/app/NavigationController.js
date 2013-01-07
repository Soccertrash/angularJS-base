function NavigationController($scope,$location){
    $scope.setRoute = function (route) {
        $location.path(route)

    }
    $scope.isActive = function (route) {
        return route === $location.path();
    }

}