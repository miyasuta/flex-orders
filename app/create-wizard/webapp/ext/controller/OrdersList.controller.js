sap.ui.define(
	[
		"sap/ui/core/mvc/ControllerExtension",
	],
	function(ControllerExtension, ) {
		"use strict";
		return ControllerExtension.extend("flex.createwizard.ext.controller.OrdersList", {
			override: {
				routing: {					
					onBeforeNavigation: function(mNavigationParameters) {
						const oBindingContext = mNavigationParameters.bindingContext;
                        const parameters = {
                            key: /\(([^)]*)\)/.exec(oBindingContext.getPath())[1]
                        };
						this.base.getExtensionAPI().routing.navigateToRoute("OrdersObjectPage", parameters)
						return true;
					}
				}
			}
		});
	}
);