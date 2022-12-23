sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'flex/orderentry/test/integration/FirstJourney',
		'flex/orderentry/test/integration/pages/OrdersList',
		'flex/orderentry/test/integration/pages/OrdersObjectPage',
		'flex/orderentry/test/integration/pages/ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage, ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('flex/orderentry') + '/index.html'
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