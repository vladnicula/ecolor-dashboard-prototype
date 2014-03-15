 define('core-apps/router', [
  './layout-manager/view',
  './dashboard/view',
  ], function ( LayoutManager, DashboardView ) {
  "use strict";

  return Backbone.Router.extend({
    routes: {
      "": 'index',
      "stock": "stock",
      "invoices": "invoices", 
      "goods": "goods" 
    },

    initialize: function() {
      var router = this;
      // bug workaround http://stackoverflow.com/questions/6779536/default-path-problem-in-backbone-js

      router.route(/\/?/, 'index', this.index);
      console.log("create and setup LayoutManager", LayoutManager);
      router.layout = new LayoutManager().render();
    },

    index : function () {
      this.layout.showPage("index",DashboardView);
    },

    stock: function() {
      this.layout.showPage("stock",DashboardView);
    },

    invoices: function() {
      this.layout.showPage("invoices",DashboardView);
    },

    goods : function () {
      this.layout.showPage("goods",DashboardView);
    }
  });

 });
