
// chrome.runtime.onMessage.addListener(
//   console.log("In the listener for message")
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//     sendResponse({farewell: "blb"});
//     console.log("The message cam through")
//     chrome.browserAction.onClicked.addListener(function(tab) {
//       console.log("In the listener for icon")
//       chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="red"'});
//       //  chrome.tabs.executeScript(null, {file: "popup.js"});
//     });
//   });

  //
  // function backgroundFunction () {
  //     return "hello from the background!"
  //     var data = document.getElementById("status")
  //     data.innerHTML += "<li> BACGROUND BITCHES </li><br>"
  // }



  chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse){
         localStorage["total_elements"] = request.total_elements;
         sendResponse({farewell: localStorage["total_elements"]})
      }
  );

  // chrome.runtime.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //     console.log(sender.tab ?
  //                 "from a content script:" + sender.tab.url :
  //                 "from the extension");
  //       // Code for popup.html
  //       // document.addEventListener("DOMContentLoaded", function() {
  //       //   var colors = ["green", "red", "blue", "purple", "yellow"]
  //       //
  //       //   document.body.style.backgroundColor= colors[Math.floor ( Math.random() * colors.length )]
  //       //   console.log("document",document)
  //       //
  //       //   var data = document.getElementById("status")
  //       //   data.innerHTML += "<li>"+ copies.length +"</li><br>"
  //       //
  //       // });
  //       // chrome.browserAction.onClicked.addListener(function() {
  //       //   var colors = ["green", "red", "blue", "purple", "yellow"]
  //       //     chrome.browserAction.executeScript(null, {code:"document.body.bgColor= colors[Math.floor ( Math.random() * colors.length )]"})
  //       // })
  //       sendResponse({farewell: document});
  //   });

  // console.log(tabs.Tab.highlighted)
  // browser.tabs.onActivated.addListener(function(activeInfo) {
  //   // how to fetch tab url using activeInfo.tabid
  //   browser.tabs.get(activeInfo.tabId, function(tab){
  //      console.log(tab.url);
  //   });
  // });
