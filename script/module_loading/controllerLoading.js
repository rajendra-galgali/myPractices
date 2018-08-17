function module2($scope, module3) {

    $scope.name = "veena"
    console.log("$scope>", $scope.name)
    alert('Hello '+$scope.name)
    module3()
}
module2.$inject = ['$scope', 'module3']


export default module2;