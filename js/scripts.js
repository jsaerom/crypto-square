// Backend

var lowerCase = "";
var bareArray = [];

function makeAlpha(input){
  lowerCase = input.toLowerCase();
  lowerCase = lowerCase.replace(/[^a-z]/g, "");
  lowerCase = lowerCase.split("");
}

function findCR(input){
  makeAlpha(input);
  var column = Math.sqrt(lowerCase.length);
  column = Math.floor(column);
  var row = "";
  if ((Math.sqrt(lowerCase.length)) - column < .5){
    row = column + 1;
  } else {
    row = column + 2;
  }
}

function mainFunction(input){

}


// Frontend
$("form").submit(function(event){
  event.preventDefault();
  var inputPhrase = $("#inputPhrase").val();
  findCR(inputPhrase);
  // $("#result").text(outputArray.join("").toString());
});
