define("core-apps/top-navi/view", [
  ], function () {

  var instance = null;

  return Backbone.View.extend({

    initialize : function (options) {
      this.options = options;
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
      view.setElement(view.options.target);

      return view;
    },

    select : function ( pageName ) {
      var view = this;

      if ( view.currentElement ) {
        view.currentElement.removeClass("active");
      }

      view.currentElement = view.$("[data-page-link='"+pageName+"']").addClass("active");      
    }

  });

});