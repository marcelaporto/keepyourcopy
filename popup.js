copies = []

// var mystore = Rhaboo.persistent("Some unique name");

// Code for popup.html
document.addEventListener("DOMContentLoaded", function() {
  var colors = ["green", "red", "blue", "purple", "yellow"]

  document.body.style.backgroundColor= colors[Math.floor ( Math.random() * colors.length )]
  console.log("document",document)

  var data = document.getElementById("status")
  data.innerHTML += "<li>"+ copies +"</li><br>"
  data.innerHTML += "<li>"+ copies.length +"</li><br>"

});

// Code for browser
document.addEventListener('copy', function(e){
      var copied = (window.getSelection().toString())
      console.log("Inside the thing")
      copies.push(copied)
      console.log(copies)

      localStorage.yourObject = JSON.stringify(copies);
      var obj = JSON.parse(localStorage.yourObject || "{}");
      console.log(obj)
      // console.log(mystore)

      // calls background function
      // var otherWindows = chrome.extension.getBackgroundPage();
      // console.log(otherWindows.backgroundFunction());
      alert(copies.length)
      chrome.runtime.sendMessage({greeting: obj}, function(response) {
        console.log(response.farewell);
      });

      return copies
});
