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
      var view = this;
      view.$el.addClass("after-entry").removeClass("current");
      setTimeout( function () {
        view.$el.hide();
        view.$el.removeClass("after-entry");
      }, 500);

      return view;
    },

    show : function () {
      var view = this;
      view.$el.addClass("before-entry no-animation");
      view.$el.show();
      setTimeout( function () {
        view.$el.removeClass("no-animation");
        setTimeout( function () {
          view.$el.addClass("current");
          view.$el.removeClass("before-entry");
        },10);
      }, 10);
      return view;
    },

    subPage : function ( subPageName ) {
      
    }

  });
});