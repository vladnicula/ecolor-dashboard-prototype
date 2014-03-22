define("core-apps/goods/view", [
  "../page/view",
  "tpl!./view.tpl"
  ], function ( PageView, tpl ) {
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

      renderChart : function () {
        var axisFontDeclaration = {
          labelFontFamily : "'Oswald'",
          labelFontWeight : "lighter",
          gridThickness: 0.5,
        };

        var view = this,
          chart = new CanvasJS.Chart("product-history-chart", {
            backgroundColor : "#FAFAFA",
            title:{
              text: "UNIT OF X PRODUCED PER DAY",
              fontFamily : "'Oswald'",
              fontWeight : "lighter",
              fontSize : "20"
            },
            axisX: _.extend({}, axisFontDeclaration, { interval : 10 } ),
            axisY: axisFontDeclaration,

            data: [{   
              color: "darkgreen",     
              type: "column", //or stackedColumn
              toolTipContent: "Units of X produced in {label} : {y}",
              dataPoints: [
              { x: 10, y: 290, label: "05" },
              { x: 20, y: 155, label: "06" },
              { x: 30, y: 281, label: "07" },
              { x: 40, y: 290, label: "08" },
              { x: 50, y: 307.5, label: "09" },
              { x: 60, y: 168, label: "10" },
              { x: 70, y: 293, label: "11" },
              { x: 80, y: 269, label: "12" },
              { x: 90, y: 295, label: "13" },
              { x: 100, y: 289, label: "14" },
              { x: 110, y: 289, label: "15" },
              { x: 120, y: 291, label: "16" }
              ]
            }
            ]
          });

        setTimeout( function () {
          chart.render();
        }, 500);

        return chart;
      },

      show : function () {
        PageView.prototype.show.call(this);
        this.renderChart();
        return this;
      }
  });
});