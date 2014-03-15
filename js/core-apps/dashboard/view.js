define("core-apps/dashboard/view", [
  "../page/view",
  "tpl!./view.tpl"
  ], function ( PageView, tpl ) {
    console.log("Tpl text", tpl);
    return PageView.extend({

      initialize : function () {
        var view = this;
      },

      render : function () {
        var view = this;

        PageView.prototype.render.apply(this, arguments);

        view.$el.html(tpl({}));

        return this;
      },

      show : function () {

        PageView.prototype.show.apply(this, arguments);
        
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