
templatingApp.directive("tran", function () {
    return {
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
        templateUrl: 'views/home/tran/tran.html'
    };
});