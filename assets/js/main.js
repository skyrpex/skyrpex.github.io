(function () {

    // Configure requirejs
    require.config({
        baseUrl: "assets/js",
        paths: {
            "jquery": "libs/jquery",
            "bootstrap": "libs/bootstrap"
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

})();