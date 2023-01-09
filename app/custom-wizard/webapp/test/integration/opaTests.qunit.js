sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'flex/customwizard/test/integration/FirstJourney',
		'flex/customwizard/test/integration/pages/OrdersMain'
    ],
    function(JourneyRunner, opaJourney, OrdersMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('flex/customwizard') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersMain: OrdersMain
                }
            },
            opaJourney.run
        );
    }
);