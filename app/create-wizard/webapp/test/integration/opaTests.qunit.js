sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'flex/createwizard/test/integration/FirstJourney',
		'flex/createwizard/test/integration/pages/OrdersList',
		'flex/createwizard/test/integration/pages/OrdersObjectPage',
		'flex/createwizard/test/integration/pages/ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage, ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('flex/createwizard') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage,
					onTheItemsObjectPage: ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);