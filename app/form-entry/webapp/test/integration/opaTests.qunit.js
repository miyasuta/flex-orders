sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'flex/formentry/test/integration/FirstJourney',
		'flex/formentry/test/integration/pages/OrdersObjectPage',
		'flex/formentry/test/integration/pages/ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersObjectPage, ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('flex/formentry') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersObjectPage: OrdersObjectPage,
					onTheItemsObjectPage: ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);