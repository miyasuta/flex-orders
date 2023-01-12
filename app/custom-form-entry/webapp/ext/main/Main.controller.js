sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('flex.customformentry.ext.main.Main', {
            onInit: function() {
                PageController.prototype.onInit.apply(this);
                const router = this.getAppComponent().getRouter();
                router.getRoute("OrdersMain").attachPatternMatched(this._onObjectMatched, this);
            },

            _onObjectMatched: function() {
                const listBinding = this.getAppComponent().getModel().bindList("/Orders");
                this.editFlow.createDocument(listBinding, {
                    creationMode: "NewPage"
                })
            }

            // onCreate: function() {
            //     const listBinding = this.getView().getModel().bindList("/Orders");
            //     this.editFlow.createDocument(listBinding, {
            //         creationMode: "NewPage",
            //     })               
            // },
        });
    }
);
