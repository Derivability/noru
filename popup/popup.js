'use strict';

function RegisterScript()
{
	console.log("Clicked on button");
	browser.runtime.sendMessage({
		action: true
	})
}

function UnRegisterScript()
{
	console.log("Clicked off button");
	browser.runtime.sendMessage({
		action: false
	})
}

document.querySelector("#register").addEventListener("click", RegisterScript);
document.querySelector("#unregister").addEventListener("click", UnRegisterScript);