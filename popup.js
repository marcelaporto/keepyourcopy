var array = []



// Code for browser
document.addEventListener('copy', function(e){
      var copied = (window.getSelection().toString())
      console.log("Inside the thing")
      array.push(copied)
      console.log(array)

      localStorage.yourObject = JSON.stringify(array);
      var obj = JSON.parse(localStorage.yourObject || "{}");
      console.log(obj)
      // data.append("<li>"+ copied +"</li><br>")
});


// Code for popup.html
document.addEventListener("DOMContentLoaded", function() {
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
      data.innerHTML += "<li> "+ obj +"</li><br>";
  });
  document.body.style.backgroundColor="green"

  var data = document.getElementById("status")
  data.innerHTML += "<li> IS THIS WORKING </li><br>"
  data.innerHTML += "<li>" + array + "</li><br>"
});
