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
                if(this._createDone) {
                    if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
                        var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation"); 
                        oCrossAppNav.toExternal({
                            target: {
                                shellHash: "#"                                
                            }
                        });
                    }
                } else {
                    this._createDone = true;
                    const listBinding = this.getAppComponent().getModel().bindList("/Orders");
                    this.editFlow.createDocument(listBinding, {
                        creationMode: "NewPage"
                    });  
                }
            }
        });
    }
);
