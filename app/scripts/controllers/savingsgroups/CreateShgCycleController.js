(function (module) {
    mifosX.controllers = _.extend(module, {
        CreateShgCycleController: function (scope, routeParams, route, location, resourceFactory, dateFilter, $modal, $http) {

            scope.groupId = routeParams.groupId;
            scope.restrictDate = new Date();
            scope.cancel = "#/viewgroup/shg/"+scope.groupId;

            $http.get('scripts/shg/cycleTemplateData.json').success(function(data) {
                scope.depositsPaymentStrategyOptions = data.depositsPaymentStrategyOptions;
                scope.currencyOptions = data.currencyOptions;
            });

            scope.formData = {};
            scope.formData.shgProduct = {};

            console.log(JSON.stringify(scope.shgJsonData));

            scope.submit = function () {

            };

            /*resourceFactory.groupResource.get({groupId: routeParams.id, associations: 'all'}, function (data) {
             scope.group = data;
             });*/
        }
    });

    mifosX.ng.application.controller('CreateShgCycleController', ['$scope', '$routeParams', '$route', '$location', 'ResourceFactory', 'dateFilter', '$modal', '$http', mifosX.controllers.CreateShgCycleController]).run(function ($log) {
        $log.info("CreateShgCycleController initialized");
    });
}(mifosX.controllers || {}));