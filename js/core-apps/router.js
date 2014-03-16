 define('core-apps/router', [
  './layout-manager/view',
  './dashboard/view',
  ], function ( LayoutManager, DashboardView ) {
  "use strict";

  return Backbone.Router.extend({
    routes: {
      "" : "dashboard",
      "dashboard" : "dashboard",
      "stock": "stock",
      "invoices": "invoices", 
      "goods": "goods" 
    },

    initialize: function() {
      var router = this;
      router.layout = new LayoutManager().render();
    },

    dashboard : function () {
      this.layout.showPage("dashboard",DashboardView);
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
