sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/ui/model/json/JSONModel',
    ],
    function(PageController, JSONModel,) {
        'use strict';

        return PageController.extend('flex.customformentry.ext.view.Form', {
            onInit: function() {
                PageController.prototype.onInit.apply(this);
                let model = {
                    editable : true
                };
                this.getView().setModel(new JSONModel(model), "viewModel");
            },
    
            saveDocument: function () {
                var that = this;
                this.editFlow.saveDocument(this.getView().getBindingContext()).then(function(){
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
