sap.ui.define(["sap/fe/core/PageController", "sap/m/MessageToast"], function(PageController, MessageToast) {
	"use strict";

	return PageController.extend("flex.customlistreport.ext.create.OrderCreate", {

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
});