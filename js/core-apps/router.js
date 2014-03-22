 define('core-apps/router', [
  './layout-manager/view',
  './dashboard/view',
  './stock/view',
  './invoices/view',
  './goods/view'
  ], function ( LayoutManager, DashboardView, StockView, InvoicesView, GoodsView ) {
  "use strict";

  return Backbone.Router.extend({
    routes: {
      "" : "dashboard",
      "dashboard" : "dashboard",
      "stock": "stock",
      "invoices": "invoices", 
      "invoices/:subpage": "invoices", 
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
      this.layout.showPage("stock",StockView);
    },

    invoices: function(subpage) {
      this.layout.showPage("invoices",InvoicesView, subpage);
    },

    goods : function () {
      this.layout.showPage("goods",GoodsView);
    }
  });

 });
