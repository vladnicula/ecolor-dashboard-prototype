define("core-apps/dashboard/view", [
  "../page/view",
  "tpl!./view.tpl"
  ], function ( PageView, tpl ) {
    return PageView.extend({

      events : {
        "click .info-section" : "navigateToPage"
      },

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

        return this;
      },

      navigateToPage : function ( ev ) {
        
        var target = $(ev.target);
        if ( !target.hasClass("info-section") ) {
          target = target.closest(".info-section");
        }
        console.log("info-section clicked", target.attr("data-href"));
      }
  });
});