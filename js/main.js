require.config({
    baseUrl: 'js/'
});

require(['core-apps/router'],function ( CoreAppsRouter ) {

  'use strict'; 

  $(function () {

    window.app = new CoreAppsRouter;
    Backbone.history.start({pushState: true});

  });

});