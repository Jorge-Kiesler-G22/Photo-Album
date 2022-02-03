let Pieces = []; 
let userInput;
$(".add").click(function(){
userInput = $(".image-url").val();
Pieces.push(".picture-url");
$(".gallery").append("<img src=" + userInput + ">");
$("input:text").val(" ");
});