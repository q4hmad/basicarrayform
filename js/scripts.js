$(document).ready(function() {
  $("#form1 form").submit(function(event) {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var activity = $("#activity").val();
    var favFood = $("#favFood").val();
    var clothes = $("#clothes").val();
    var shoes = $("#shoes").val();
    var stuff = [activity, favFood];
    var stuff2 = [clothes, shoes];


    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $("#favStuff").text(stuff);
    $("#food").text(stuff);
    // $("#favStuff").text(stuff2);
    // $("#food").text(stuff2);

    event.preventDefault();
    $(".pide").show();
  });
});
