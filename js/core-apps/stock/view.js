define("core-apps/stock/view", [
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

      show : function () {

        PageView.prototype.show.apply(this, arguments);

        var axisFontDeclaration = {
          labelFontFamily : "'Oswald'",
          labelFontWeight : "lighter",
          gridThickness: 0.5,
        };

        var view = this,
          chart = new CanvasJS.Chart("stock-chart", {
            backgroundColor : "#FAFAFA",
            title:{
              text: "STOCK VALUE",
              fontFamily : "'Oswald'",
              fontWeight : "lighter",
              fontSize : "20"
            },
            axisX: _.extend({}, axisFontDeclaration, { interval : 10 } ),
            axisY: axisFontDeclaration,

            data: [{        
              type: "line", //or stackedColumn
              toolTipContent: "{label} 2013 Stock Value {y}",
              dataPoints: [
              { x: 10, y: 290, label: "Jan" },
              { x: 20, y: 155, label: "Feb" },
              { x: 30, y: 281, label: "Mar" },
              { x: 40, y: 290, label: "Apr" },
              { x: 50, y: 307.5, label: "May" },
              { x: 60, y: 168, label: "Jun" },
              { x: 70, y: 293, label: "Jul" },
              { x: 80, y: 269, label: "Aug" },
              { x: 90, y: 295, label: "Sep" },
              { x: 100, y: 289, label: "Oct" },
              { x: 110, y: 289, label: "Nov" },
              { x: 120, y: 291, label: "Dec" }
              ]
            },{        
              type: "line", //or stackedColumn
              toolTipContent: "{label} 2014 Stock Value {y}",
              dataPoints: [
              { x: 10, y: 305, label: "Jan"  },
              { x: 20, y: 302, label: "Feb" },
              { x: 30, y: 301, label: "Mar"  }
              ]
            }
            ]
          });

        setTimeout( function () {
          chart.render();
        }, 500);
      
        return this;
      }
  });
});