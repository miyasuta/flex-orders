sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'flex/customformentry2/test/integration/FirstJourney',
		'flex/customformentry2/test/integration/pages/OrdersMain'
    ],
    function(JourneyRunner, opaJourney, OrdersMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('flex/customformentry2') + '/index.html'
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