(function (module) {
    mifosX.controllers = _.extend(module, {
        CreateShgFundController: function (scope, routeParams, route, location, resourceFactory, dateFilter, $modal) {

            scope.cancel = "#/viewgroup/shg/"+routeParams.groupId;
            scope.formData = {};
            scope.formData.shgProduct = {};
            scope.shgCharge = {};
            scope.formData.shgCharges = [];

            scope.chargeAppliesToSelected = function (chargeAppliesId) {
                switch(chargeAppliesId) {
                    case 1:
                        scope.showChargePaymentByField = true;
                        scope.chargeCalculationTypeOptions = scope.template.loanChargeCalculationTypeOptions;
                        scope.chargeTimeTypeOptions = scope.template.loanChargeTimeTypeOptions;
                        scope.showGLAccount = false;
                        break ;
                    case 2:
                        scope.showChargePaymentByField = false;
                        scope.chargeCalculationTypeOptions = scope.template.savingsChargeCalculationTypeOptions;
                        scope.chargeTimeTypeOptions = scope.template.savingsChargeTimeTypeOptions;
                        scope.addfeefrequency = false;
                        scope.showGLAccount = false;
                        break ;
                    case 3:
                        scope.chargeCalculationTypeOptions = scope.template.clientChargeCalculationTypeOptions;
                        scope.chargeTimeTypeOptions = scope.template.clientChargeTimeTypeOptions;
                        scope.addfeefrequency = false;
                        scope.showGLAccount = true;
                        break ;
                    case 4:
                        scope.showChargePaymentByField = false;
                        scope.chargeCalculationTypeOptions = scope.template.shareChargeCalculationTypeOptions;
                        scope.chargeTimeTypeOptions = scope.template.shareChargeTimeTypeOptions;
                        scope.addfeefrequency = false;
                        scope.showGLAccount = false;
                        scope.showPenalty = false ;
                        break ;
                }
            }

            scope.addCharges = function (){
                if(scope.shgCharge.name){
                    scope.formData.shgCharges.push(scope.shgCharge);
                }
               delete scope.shgCharge;
            };

            /*resourceFactory.groupResource.get({groupId: routeParams.id, associations: 'all'}, function (data) {
                scope.group = data;
            });*/
        }
    });

    mifosX.ng.application.controller('CreateShgFundController', ['$scope', '$routeParams', '$route', '$location', 'ResourceFactory', 'dateFilter', '$modal', mifosX.controllers.CreateShgFundController]).run(function ($log) {
        $log.info("CreateShgFundController initialized");
    });
}(mifosX.controllers || {}));