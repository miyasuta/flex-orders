sap.ui.define(
	[
		"sap/ui/core/mvc/ControllerExtension",
	],
	function(ControllerExtension, ) {
		"use strict";
		return ControllerExtension.extend("flex.orderentry.ext.controller.OrdersDetail", {
			override: {
				editFlow: {
					onBeforeEdit: function (mParameters) {
						const oBindingContext = mParameters.context;
                        const parameters = {
                            key: /\(([^)]*)\)/.exec(oBindingContext.getPath())[1]
                        };
						this.base.getExtensionAPI().routing.navigateToRoute("OrdersObjectPage", parameters);
					}
				}
			}
		});
	}
);
