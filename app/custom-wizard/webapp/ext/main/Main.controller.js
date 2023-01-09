sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('flex.customwizard.ext.main.Main', {
            reviewOrder: function () {
                this.byId("wizardNavContainer").to(this.byId("reviewPage"));
            },
    
            createOrder: function () {
                var that = this;
                this.editFlow.saveDocument(this.getView().getBindingContext()).then(function(){
                    that.routing.navigateToRoute('OrdersMain');
                })
            },
    
            cancelDocument: function () {
                var that = this;
                this.editFlow.cancelDocument(this.getView().getBindingContext(), {
                    control: this.byId("cancelButton")
                }).then(function(){
                    that.routing.navigateToRoute('OrdersMain');
                })
            }
        });
    }
);
