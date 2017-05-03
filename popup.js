document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('copy', function(e){
      var copied = (window.getSelection().toString())
      console.log("Inside the thing")
      "<li>" + copied + "</li>"
      var data = $("#status");
      data.append("<li>"+ copied +"</li><br>")
  });
});
