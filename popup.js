// var mystore = Rhaboo.persistent("Some unique name");

// Code for popup.html
document.addEventListener("DOMContentLoaded", function() {
  var colors = ["green", "red", "blue", "purple", "yellow"]

  document.body.style.backgroundColor= colors[Math.floor ( Math.random() * colors.length )]
  console.log("document",document)

  // chrome.tabs.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //     newarray = request.greeting
  //     console.log(sender.tab ?
  //                 "from a content script:" + sender.tab.url :
  //                 "from the extension");
  //       sendResponse({farewell: "BACK TO THE TOP"});
  // });


  var data = document.getElementById("status")
  data.innerHTML += "<li> "+ localStorage["total_elements"].length +" </li><br>"




});
