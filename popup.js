// var mystore = Rhaboo.persistent("Some unique name");

// Code for popup.html
document.addEventListener("DOMContentLoaded", function() {

  var colors = ["green", "red", "blue", "purple", "yellow"]

  document.body.style.backgroundColor= colors[Math.floor ( Math.random() * colors.length )]
  console.log("document",document)

  clearData();

  // chrome.tabs.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //     newarray = request.greeting
  //     console.log(sender.tab ?
  //                 "from a content script:" + sender.tab.url :
  //                 "from the extension");
  //       sendResponse({farewell: "BACK TO THE TOP"});
  // });

  arrayOfCopies = localStorage["total_elements"].split(",")
  populateScript(arrayOfCopies)

});

function populateScript(array) {
  var data = document.getElementById("status")
  for(var i = (array.length - 1) ; i > 0; i--){
    data.innerHTML += "<li> "+ array[i] +" </li><br>"
    break if i == (array.length - 15)
  }
}

var clearData = function(){
  document.getElementById("clear-data").addEventListener("click", function(){
    localStorage["total_elements"] = ""
    // chrome.runtime.sendMessage({message: "clearLocalStorage"}, function(response) {
    //   console.log("Response",response);
    // });
  });
}
