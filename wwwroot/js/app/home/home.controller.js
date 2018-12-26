finleo.controller('HomeController', ['$scope', function ($scope) {
    window._m = $scope;
    var _m = window._m;
    
    //valores iniciais
    $scope.contas = [
        { nome: "Carteira", id: 1 },
        { nome: "Cartao de Credito", id: 2 },
        { nome: "Itau", id: 3 },
        { nome: "NuConta", id: 4 },
        { nome: "Poupanca", id: 5 },
        { nome: "SouzaSerra", id: 6 }];
    $scope.categorias = [
        { nome: "Lazer", id: 1 },
        { nome: "Casa", id: 2 },
        { nome: "Transporte", id: 3 }];

    $scope.transacoes = [{
        id: 1,
        data: converterData(new Date(2018, 12, 21)),
        descricao: 'Barzinho',
        categoria: { nome: 'Lazer', id: 1 },
        outrasCategorias: function () { return obterOutras(this.categoria, $scope.categorias); },
        conta: { nome: 'Cartao de Credito', id: 2 },
        outrasContas: function () { return obterOutras(this.conta, $scope.contas); },
        valor: 123.45,
        mostrarBotaoExcluir: true,
        mostrarBotaoSalvar: false,
        mostrarBotaoCancelar: false
    }, {
        id: 2,
        data: converterData(new Date(2018, 12, 11)),
        descricao: 'Luz',
        categoria: { nome: 'Casa', id: 2 },
        outrasCategorias: function () { return obterOutras(this.categoria, $scope.categorias); },
        conta: { nome: 'Carteira', id: 1 },
        outrasContas: function () { return obterOutras(this.conta, $scope.contas); },
        valor: 50.54,
        mostrarBotaoExcluir: true,
        mostrarBotaoSalvar: false,
        mostrarBotaoCancelar: false
        }];

    $scope.novaTransacaoEmEdicao = false;

    $scope.adicionaTransacao = function () {

        if ($scope.novaTransacaoEmEdicao) {
            $scope.mostraMsgNovaTransacaoEmEdicao = true;
            return;
        }
        //var novoId = obterNovoId($scope.transacoes);
        $scope.transacoes.push({
            //id: novoId,
            data: converterData(new Date()),
            descricao: '',
            categoria: { nome: 'Escolha a categoria', id: 0 },
            outrasCategorias: function () { return obterOutras(this.categoria, $scope.categorias); },
            conta: { nome: 'Escolha a conta', id: 0 },
            outrasContas: function () { return obterOutras(this.conta, $scope.contas); },
            valor: 0.00,
            mostrarBotaoExcluir: false,
            mostrarBotaoSalvar: true,
            mostrarBotaoCancelar: true
        });

        $scope.novaTransacaoEmEdicao = true;
    }

    $scope.excluirTransacao = function (t) {

        //excluir transacao no backend..no callback cancelar:
        $scope.transacoes.splice($scope.transacoes.indexOf(t), 1);
        //$scope.cancelarTransacao(t);
    }

    $scope.cancelarTransacao = function (t) {
        $scope.transacoes.splice($scope.transacoes.indexOf(t), 1);
        $scope.novaTransacaoEmEdicao = false;
        $scope.mostraMsgNovaTransacaoEmEdicao = false;
    }

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

    //helpers
    function obterOutras(atual, todas) {
        var outras = [];
        for (var i = 0; i < todas.length; i++) {
            var outra = todas[i];
            if (outra.id != atual.id) {
                outras.push(outra);
            }
        }
        return outras;
    }
    function converterData(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    }
    function obterNovoId(colecao) {
        var ids = colecao.sort(function (a, b) {
            return a.id - b.id;
        });
        if (ids.length > 0)
            return ids[colecao.length - 1].id + 1;
    }
}]);
