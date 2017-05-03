chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      console.log(chrome.tabs)
      chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="red"'})
      sendResponse({farewell: (chrome.tabs)});
  });

  // console.log(tabs.Tab.highlighted)
  // browser.tabs.onActivated.addListener(function(activeInfo) {
  //   // how to fetch tab url using activeInfo.tabid
  //   browser.tabs.get(activeInfo.tabId, function(tab){
  //      console.log(tab.url);
  //   });
  // });
