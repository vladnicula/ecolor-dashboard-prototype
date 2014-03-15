define("core-apps/page/view", [], function () {

  return Backbone.View.extend({

    render : function () {
      var view = this;
      return view;
    },

    hide : function () {
      console.log("page view hide");
    },

    show : function () {
      console.log("page view show");
    }

  });
});