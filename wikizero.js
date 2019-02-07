chrome.tabs.onUpdated.addListener(function() {
	chrome.tabs.getSelected(null, function(tab) {
		if (tab.url.indexOf(".wikipedia.org") > -1) {
			var newURL = tab.url.replace("wikipedia.org/","0wikipedia.org/");
			chrome.tabs.update({ url: newURL });
		};
	});
});