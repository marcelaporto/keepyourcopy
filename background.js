chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse){
        if(request.total_elements === "clear"){
          chrome.notifications.create('message', {
            type: 'basic',
            title: 'All your copies were deleted',
            message: 'All your copies were deleted'
          })
          // alert("DID THE THING")
          sendResponse({farewell: "DID THE THING"})
        }else {
          localStorage["total_elements"] += ("___ " + request.total_elements);
          sendResponse({farewell: localStorage["total_elements"]})
        }
      }
);
