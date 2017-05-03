copies = []

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
      chrome.runtime.sendMessage({total_elements: obj}, function(response) {
        console.log(response);
      });
});
