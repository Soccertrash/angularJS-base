function SampleFormController($scope) {
    $scope.surname = '';
    $scope.firstname = '';

    $scope.isCommaVisible = function () {

        var result =
            angular.isDefined($scope.firstname)
                && angular.isDefined($scope.surname)
                && $scope.firstname.length > 0 &&
                $scope.surname.length > 0;
        return result;
    };
}