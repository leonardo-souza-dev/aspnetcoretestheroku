finleo.directive('transacao', function () {
    return {
        restrict: 'E',
        templateUrl: '/js/app/home/transacao/transacao.html',
        scope: {
            tin: '='
        }
    };
});