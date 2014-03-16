require.config({
    baseUrl: 'js/',
    waitSeconds : 99,
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "text" : "../lib/requiretext/text",
        "tpl" : "../lib/requiretpl/tpl"
    }
});

require(['core-apps/router'],function ( CoreAppsRouter ) {

  'use strict'; 

  $(function () {


    window.app = new CoreAppsRouter;
    Backbone.history.start({pushState: false});

  });

});