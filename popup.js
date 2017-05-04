// var mystore = Rhaboo.persistent("Some unique name");

// Code for popup.html
document.addEventListener("DOMContentLoaded", function() {

  // clearData;

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

  arrayOfCopies = localStorage["total_elements"].split(",")
  populateScript(arrayOfCopies)

});

function populateScript(array) {
  var data = document.getElementById("status")
  for(var i = 0; i < array.length; i++){
    alert("populating")
    data.innerHTML += "<li> "+ array[i] +" </li><br>"
  }
}

// function clearData(){
//   document.getElementById("clear-data").addEventListener("click", function(){
//     alert("YO")
//     // var data = document.getElementById("status")
//     // data.innerHTML = ""
//   });
}
