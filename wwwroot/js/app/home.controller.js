
templatingApp.controller('HomeController', ['$scope', function ($scope) {
    $scope.message = "Welcome to ASP.NET Core!";

    //obterTransacoes();

    $scope.cartaoCredito = {
        descricao: 'Barzinho',
        categoria: 'Lazer',
        //conta2: 'Itauuu',
        valor: 123.45
    };
    //$scope.igor = {
    //    name: 'Igor',
    //    address: '123 Somewhere'
    //};

    //function obterTransacoes() {
    //    $scope.listaTransacoes = [{descricao: 'oi'}];
    //};
    //function obterTransacoesApi() {
    //    $http({
    //        method: 'GET',
    //        url: '/api/Values/obterTransacoes/'
    //    }).then(function (response) {
    //        $scope.listaTransacoes = response.data;
    //    }, function (error) {
    //        console.log(error);
    //    });
    //};
}]);
