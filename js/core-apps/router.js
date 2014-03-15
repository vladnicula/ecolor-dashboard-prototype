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
      var router = this;
      console.log("Should show indexview",DashboardView);
      router.dashboardView = new DashboardView().render();
    },

    stock: function() {
      
    },

    invoices: function() {
      
    },

    goods : function () {
      
    }
  });

 });
