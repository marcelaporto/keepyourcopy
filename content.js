copies = []

// Code for browser
document.addEventListener('copy', function(e){
      var copied = (window.getSelection().toString())
      console.log("Inside the thing")
      copies.push(copied)

      // sets unique key value to insert into localStorage
      localStorage[Date.now()]= JSON.stringify(copied);
      var obj = parseLocalStorage();
      console.log(obj)
      // console.log(mystore)

      // calls background function
      // var otherWindows = chrome.extension.getBackgroundPage();
      // console.log(otherWindows.backgroundFunction());
      chrome.runtime.sendMessage({total_elements: obj}, function(response) {
        console.log("Response",response);
      });
});

function parseLocalStorage() {
  var parsedData = []
  arrayOfKeys = Object.keys(localStorage)
  for(var i = 0; i < arrayOfKeys.length; i ++){
    parsedData.push(JSON.parse(localStorage[arrayOfKeys[i]]))
  }
  return parsedData
}
