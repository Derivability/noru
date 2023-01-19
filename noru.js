console.log("started core")
url = new URL(window.location.href);
params = new URLSearchParams(url.search);
query = params.get("q");
console.log(url)
if (!query.includes("-inurl:*.ru"))
{
	query = query + " -inurl:*.ru";
	params.set("q", query);
	url.search = params.toString();
	window.location.href = url.href;
}
