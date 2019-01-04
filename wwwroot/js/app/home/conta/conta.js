finleo.directive('conta', function () {
    return {
        restrict: 'E',
        templateUrl: '/js/app/home/conta/conta.html',
        scope: {
            cin: '='
        }
    };
});