
define(function(require, exports, module) {

    // var $ = require('jquery');

    var JSO = require('../jso/jso');
    JSO.enablejQuery($);
    console.log("READY (1)");

    var onReady = function() {

        console.log("on ready");
        var jso = new JSO({
            providerId: "feideconnect",
            client_id: "42934c73-6fae-4507-92a4-c67f87923aa9",
            redirect_uri: "http://localhost/~andreas/phonegap-start/www/",
            authorization: "https://auth.uwap.uninettlabs.no/oauth/authorization"
        });
        jso.on('redirect', window.plugins.childBrowser.showWebPage);

        jso.callback();

        jso.ajax({
            url: "https://api.uwap.uninettlabs.no/userinfo",
            oauth: {
                scopes: {
                    request: ["userinfo", "longterm"],
                    require: ["userinfo"]
                }
            },
            dataType: 'json',
            success: function(data) {
                console.log("Response (google):");
                console.log(data);
                $(".loader-hideOnLoad").hide();
            }
        });


    };
    document.addEventListener('deviceready', onReady, false);
 

});

