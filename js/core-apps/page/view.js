define("core-apps/page/view", [
  "tpl!./view.tpl"
  ], function ( tpl ) {

  return Backbone.View.extend({

    render : function (args) {
      var view = this;
      view.setElement(tpl(args));
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