$(document).ready(function(){
  $("#formOne").submit(function(event){

    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animal = $("input#animal").val();
    var exclamation = $("input#exclamation").val();
    var verb = $("input#verb").val();
    var noun = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animal);
    $(".exclamation").text(exclamation);
    $(".verb").text(verb);
    $(".noun").text(noun);
    $("#story").show();
    event.preventDefault();
 });
 $("#clear").click(function(){
   $("#story").toggle();
 });

});
