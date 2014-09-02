# iOS Phonegap and JSO




	cordova create jsodemo no.uninett.jso-demo JSOdemo

	cordova plugin add org.apache.cordova.inappbrowser
	cordova plugin add https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin.git --variable URL_SCHEME=jsodemo

	cordova emulate ios
