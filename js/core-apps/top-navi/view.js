define("core-apps/top-navi/view", [
  ], function () {

  var instance = null;

  return Backbone.View.extend({

    events : {
      "click [data-page-link]" : "hideMenu"
    },

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
      console.log("el", this.$el);
      return view;
    },

    select : function ( pageName ) {
      var view = this;

      if ( view.currentElement ) {
        view.currentElement.removeClass("active");
      }

      view.currentElement = view.$("[data-page-link='"+pageName+"']").addClass("active");      
    },

    hideMenu : function () {
      this.$el.closest('.navbar-collapse').removeClass("in");
    }

  });

});