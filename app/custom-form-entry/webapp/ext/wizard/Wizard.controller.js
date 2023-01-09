sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/ui/model/json/JSONModel',
        'sap/m/MessageToast'
    ],
    function(PageController, JSONModel, MessageToast) {
        'use strict';

        return PageController.extend('flex.customformentry.ext.wizard.Wizard', {
            onInit: function() {
                let model = {
                    editable : true
                };
                this.getView().setModel(new JSONModel(model), "viewModel");
            },

            reviewOrder: function () {
                this.byId("wizardNavContainer").to(this.byId("reviewPage"));
            },
    
            createOrder: function () {
                var that = this;
                this.editFlow.saveDocument(this.getView().getBindingContext()).then(function(){
                    MessageToast.show("Order created!");
                    that.getView().getModel("viewModel").setProperty("/editable", false);
                })
            },
    
            cancelDocument: function () {
                var that = this;
                this.editFlow.cancelDocument(this.getView().getBindingContext(), {
                    control: this.byId("cancelButton")
                }).then(function(){
                    that.getView().getModel("viewModel").setProperty("/editable", false);
                })
            }
        });
    }
);
