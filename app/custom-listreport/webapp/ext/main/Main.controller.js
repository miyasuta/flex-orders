sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('flex.customlistreport.ext.main.Main', {
            onCreate: function() {
                this.routing.navigateToRoute('Create');
            }
        });
    }
);
