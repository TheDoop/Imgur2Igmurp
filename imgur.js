chrome.tabs.onUpdated.addListener(function() {
	chrome.tabs.getSelected(null, function(tab) {
		if (tab.url.indexOf("imgur.com") > -1) {
			var newURL = tab.url.replace("imgur.com/",".0imgur.com/");
			chrome.tabs.update({ url: newURL });
		};
	});
});
