sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'flex/customlistreport/test/integration/FirstJourney',
		'flex/customlistreport/test/integration/pages/OrdersMain'
    ],
    function(JourneyRunner, opaJourney, OrdersMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('flex/customlistreport') + '/index.html'
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