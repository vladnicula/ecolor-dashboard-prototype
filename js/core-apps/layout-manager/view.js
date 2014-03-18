define("core-apps/layout-manager/view", [
  "core-apps/top-navi/view"
  ], function ( TopNaviView ) {

  var instance = null;

  return Backbone.View.extend({

    initialize : function () {
      if ( instance ) {
        console.warn("Trying to initialize layout again.");
      }
    },

    render : function () {
      var view = this;

      if ( instance ) {
        return instance;
      }

      instance = this;

      view.setElement($("#viewport"));
      view.app = view.$("#app-content");
      
      view.topMenu = new TopNaviView({ target : view.$(".navbar.navbar-top .nav.navbar-nav")}).render();

      return view;
    },

    showPage : function ( pageName, pageView ) {
      var view = this,
          targetPage = view[pageName];

      if ( !targetPage ) {
          targetPage = view[pageName] = new pageView().render({ pageName : pageName });
          view.app.append(targetPage.$el);
      } 
      
      if ( view.currentPage ) {
        if ( view.currentPage === targetPage ) {
          return;
        }
        view.currentPage.hide();
      }

      view.currentPage = targetPage.show();
      view.topMenu.select(pageName);
    }

  });

});