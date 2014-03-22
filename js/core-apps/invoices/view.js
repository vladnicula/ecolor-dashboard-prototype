define("core-apps/invoices/view", [
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

      select : function ( target ) {
        var view = this;
        view.$(".invoice-subpage-navigation .active").removeClass("active");
        view.$(".invoice-subpage-navigation [data-sub-page-link='"+target+"']").addClass("active");
        return view;
      },

      renderChart : function () {
        var axisFontDeclaration = {
          labelFontFamily : "'Oswald'",
          labelFontWeight : "lighter",
          gridThickness: 0.5,
        };

        var view = this,
          chart = new CanvasJS.Chart("invoice-chart", {
            backgroundColor : "#FAFAFA",
            title:{
              text: "REVENUE PER MONTH",
              fontFamily : "'Oswald'",
              fontWeight : "lighter",
              fontSize : "20"
            },
            axisX: _.extend({}, axisFontDeclaration, { interval : 10 } ),
            axisY: axisFontDeclaration,

            data: [{        
              type: "column", //or stackedColumn
              toolTipContent: "{label} 2013 REVENUE {y}",
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
              type: "column", //or stackedColumn
              toolTipContent: "{label} 2014 REVENUE {y}",
              dataPoints: [
              { x: 10, y: 305, label: "Jan"  },
              { x: 20, y: 402, label: "Feb" },
              { x: 30, y: 450, label: "Mar"  }
              ]
            }
            ]
          });

        return chart;
      },

      renderReport : function () {
        var view = this;
        if ( view.currentSubPage === 'report' ) {
          return;
        }

        if ( !view.reportChart ) {
          view.reportChart = view.renderChart();
        }

        setTimeout( function () {
          view.reportChart.render();
        }, 500);

      },

      subPage : function ( subPageName ) {
        var view = this;

        if ( !subPageName ) {
          subPageName = "main";
        } 
        
        view.select(subPageName);
        console.log(view.currentSubPage, subPageName);

        if ( view.currentSubPage !== subPageName ) {
          //renderReport, renderMain etc
          view.$el.removeClass(view.currentSubPage);
          view.$el.addClass(subPageName);
          var renderFn = view['render'+subPageName.replace(subPageName[0], subPageName[0].toUpperCase())];
          if ( renderFn ) {
            renderFn.call(view);
          }
          view.currentSubPage = subPageName;
        }

        
      }
  });
});