function SampleFormController($scope) {
    $scope.entity = {};

    $scope.isCommaVisible = function () {

        var result =
            angular.isDefined($scope.entity.firstname)
                && angular.isDefined($scope.entity.surname)
                && $scope.entity.firstname.length > 0 &&
                $scope.entity.surname.length > 0;
        return result;
    };

}