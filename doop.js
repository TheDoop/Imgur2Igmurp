chrome.tabs.onUpdated.addListener(function() {
	chrome.tabs.getSelected(null, function(tab) {
		if (tab.url.indexOf("i.imgur.com") > -1) {
			var newURL = tab.url.replace("i.imgur.com/","i.imgurp.com/");
			chrome.tabs.update({ url: newURL });
		};
	});
});
