sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('flex.customlistreport.ext.main.Main', {
            onCreate: function() {
                const listBinding = this.getView().getModel().bindList("/Orders");
                this.editFlow.createDocument(listBinding, {
                    creationMode: "External",
                    outbound: "create-wizard"
                })               
            },

            handlers: {
                onChevronPressNavigateOutBound: function(oController, outbound, undefined, sCreatePath) {
                    oController.intentBasedNavigation.navigateOutbound(outbound);
                }
            }
        });
    }
);
