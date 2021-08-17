jQuery(function() {	
	chrome.runtime.onMessage.addListener(onMessages);

	function onMessages(request, sender, sendResponse){ 
		
		if(request.action == "newTab"){
			chrome.tabs.create({ url : "https://www.facebook.com/"+request.uid ,active:true},function(tab){});	
		}

		if(request.action == "siteHome"){
			chrome.tabs.create({ url : "https://quetsodienthoai.com",active:true},function(tab){});	
		}

	}

})