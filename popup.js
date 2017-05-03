var array = []
document.addEventListener('copy', function(e){
      var copied = (window.getSelection().toString())
      console.log("Inside the thing")
      array.push(copied)
      console.log(array)
      // data.append("<li>"+ copied +"</li><br>")
});

var data = document.getElementById("#status");
data.append("<li>"+ array +"</li><br>")


// var array = []
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
//   document.addEventListener('copy', function(e){
//       var copied = (window.getSelection().toString())
//       console.log("Inside the thing")
//       console.log(copied)
//       array.push(copied)
//       console.log(array)
//       // data.append("<li>"+ copied +"</li><br>")
//   });
// });
//
//       var data = $("#status");
//       data.append("<li>"+ array +"</li><br>")
