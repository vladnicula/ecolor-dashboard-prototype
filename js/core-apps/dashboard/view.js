define("core-apps/dashboard/view", [], function () {

  return Backbone.View.extend({
    render : function () {
      var secondChart = new CanvasJS.Chart("invoicesPerMonthChartContainer", {
          title:{
              text: "Invoices per month"              
          },
          data: [              
            {
                type: "column",
                dataPoints: [
                  { label: "jan", y: 10 },
                  { label: "feb", y: 15 },
                  { label: "mar", y: 25 },
                  { label: "apr", y: 30 },
                  { label: "may", y: 28 }
                ]
            }
          ]
      });

      secondChart.render();
    }
  });
});