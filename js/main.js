require.config({
    baseUrl: 'js/',
    paths: {
        "text" : "../lib/requiretext/text",
        "tpl" : "../lib/requiretpl/tpl"
    }
});

require(['core-apps/router'],function ( CoreAppsRouter ) {

  'use strict'; 

  $(function () {

    window.app = new CoreAppsRouter;
    Backbone.history.start({pushState: true});

  });

});