(function($, undefined){ 

'use strict'; 

$(function () {

	
	
	var chart = new CanvasJS.Chart("chartContainer", {
      title:{
          text: "Units produces/machine yesterday"              
      },
      data: [              
        {
            type: "column",
            dataPoints: [
              { label: "machine-01", y: 10 },
              { label: "machine-02", y: 15 },
              { label: "machine-03", y: 25 },
              { label: "machine-04", y: 30 },
              { label: "machine-05", y: 28 }
            ]
        }
      ]
  });

  chart.render();
});

}(jQuery));