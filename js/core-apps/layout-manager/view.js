define("core-apps/layout-manager/view", [
  ], function () {

  return Backbone.View.extend({

    initialize : function () {

    },

    render : function () {
      var view = this;
      view.setElement($("#viewport"));
      view.app = view.$("#app-content");
      return view;
    },

    showPage : function ( pageName, pageView ) {
      var view = this,
          targetPage = view[pageName];

      if ( !targetPage ) {
          targetPage = view[pageName] = new pageView().render();
          view.app.append(targetPage.$el);
      } 
      
      if ( view.currenPage ) {
        view.currenPage.hide();
      }

      targetPage.show();
    }

  });

});