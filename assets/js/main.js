(function () {

    // Configure requirejs
    require.config({
        baseUrl: "assets/js",
        paths: {
            "jquery": "libs/jquery",
            "bootstrap": "libs/bootstrap",
            "turbolinks": "libs/turbolinks",
            "nprogress": "libs/nprogress",
            "jquery.waypoints": "libs/jquery.waypoints"
        },
        shim: {
            "bootstrap": {
                deps: ["jquery"]
            }
        }
    });

    // Initialize our app
    require(["jquery", "bootstrap"], function ($) {
        
    });

    
    require(["jquery", "jquery.waypoints"], function($) {
        console.log($);
    });
    
    require(["turbolinks", "nprogress"]);

})();