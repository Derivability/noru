'use strict';

let registered = null;

async function toggleRegisterScript(message)
{
	let action = message.action;
	console.log("Got message" + action);
	if (action == true) 
	{
		console.log("Registering")
		registered = await browser.contentScripts.register({
			matches: ["*://*.google.com/*"],
			js: [{ file: "noru.js"}]
		})
	}
	else 
	{
		console.log("Unregistering");
		registered.unregister();
	}
}

	
browser.runtime.onMessage.addListener(toggleRegisterScript);