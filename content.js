// Code for browser
document.addEventListener('copy', function(e){
      var copied = (window.getSelection().toString())
      console.log("WHAT WAS COPIED", copied)

      chrome.runtime.sendMessage({total_elements: copied}, function(response) {
        console.log("Response",response);
      });
});
