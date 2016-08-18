// Backend

var lowerCase = "";
var bareArray = [];

function makeAlpha(input){
  lowerCase = input.toLowerCase();
  lowerCase = lowerCase.replace(/[^a-z]/g, "");
  lowerCase = lowerCase.split("");
  alert(lowerCase);
}
function mainFunction(phrase){
}


// Frontend
$("form").submit(function(event){
  event.preventDefault();
  var inputPhrase = $("#inputPhrase").val();
  makeAlpha(inputPhrase);
  // $("#result").text(outputArray.join("").toString());
});
