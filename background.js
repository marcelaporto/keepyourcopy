console.log("In the background`")
chrome.runtime.onMessage.addListener(
  console.log("In the listener for message")
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
    console.log("The message cam through")
      chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="red"'})
      sendResponse({farewell: ("blb"))});
  });


  chrome.browserAction.onClicked.addListener(function(tabs.Tab) {
    console.log("In the listener for icon")
    chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="red"'});
    //  chrome.tabs.executeScript(null, {file: "popup.js"});
  });

  // console.log(tabs.Tab.highlighted)
  // browser.tabs.onActivated.addListener(function(activeInfo) {
  //   // how to fetch tab url using activeInfo.tabid
  //   browser.tabs.get(activeInfo.tabId, function(tab){
  //      console.log(tab.url);
  //   });
  // });
