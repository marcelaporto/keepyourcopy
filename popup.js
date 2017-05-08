// Code for popup.html
document.addEventListener("DOMContentLoaded", function() {

  clearData();

  arrayOfCopies = localStorage["total_elements"].split(",")
  populateScript(arrayOfCopies)

});

function populateScript(array) {
  var data = document.getElementById("status")
  alert(localStorage["total_elements"].split(",").length)
  for(var i = (array.length - 1) ; i > 0; i--){
    data.innerHTML += "<li> "+ array[i] +" </li><br>"
    if (i === (array.length - 15)) { break;}
  }
}

var clearData = function(){
  document.getElementById("clear-data").addEventListener("click", function(){
    localStorage["total_elements"] = ""
    chrome.runtime.sendMessage({total_elements: "clear"}, function(response) {
      alert(response)
      console.log("Response",response);
    });
  });
}
