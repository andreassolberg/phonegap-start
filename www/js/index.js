
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
			// redirect_uri: "https://static.uwap.uninettlabs.no/oauth-oob.html",
			redirect_uri: "jsodemo://",
			authorization: "https://auth.uwap.uninettlabs.no/oauth/authorization"
		});

		// When JSO want to redirect, we'll make use of phonegap inappbrowser plugin.
		jso.on('redirect', jso.inappbrowser({"target": "_system"}) );

		// jso.callback(url, function() {
		// });


		$('#wipe').on('click', function() {
			jso.wipeTokens();
		});

		$('#ensure').on('click', function() {
			jso.getToken(function(token) {
				$('#out').empty().append(JSON.stringify(token, undefined, 4));
			}, {
				scopes: {
					request: ["userinfo", "longterm"],
					require: ["userinfo"]
				}
			});
		});

		$('#req').on('click', function() {

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
					$("#out").empty().append( JSON.stringify(data, undefined, 3) );
				}
			});

		});

		$('#dump').on('click', function() {
			var txt = jso.dump();
			$('#out').empty().append(txt);
		});

	};
	document.addEventListener('deviceready', onReady, false);
 

});

