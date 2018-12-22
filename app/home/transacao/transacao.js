
templatingApp.directive('transacao', function () {
    return {
        restrict: 'E',
        scope: {
            obj: '=conta'
        },
        templateUrl: 'views/home/transacao/transacao.html'
    };
});