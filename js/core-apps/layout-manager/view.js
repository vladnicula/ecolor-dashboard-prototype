define("core-apps/layout-manager/view", [], function () {

  return Backbone.View.extend({
    render : function () {
      var view = this;
      view.setElement($("#viewport"));
    }
  });

});