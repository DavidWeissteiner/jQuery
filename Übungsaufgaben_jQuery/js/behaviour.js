



$("#block3").hide();

$("#steuern_rot").click(function()
{
    $("#block1").hide();
});


$("#steuern_gruen").click(function()
{
    $("#block2").hide("slow");
});


$("#steuern_blau").click(function()
{
    $("#block3").show();
});




var inputNumber;
var randomNumber;

$("#absenden").click(function()
{
    inputNumber=parseInt($("#eingegebeneZahl").val());
    randomNumber = _.random(0, 100);
    if(inputNumber<randomNumber)
    {
        $("#ausgabe").text("Ihre Zahl war leider zu klein!")
    }
    else if(inputNumber>randomNumber)
    {
        $("#ausgabe").text("Ihre Zahl war leider zu groß!")
    }
    else if(inputNumber==randomNumber)
    {
        $("#ausgabe").text("Geschafft! Sie haben die Zahl erraten.")
    }
    alert(randomNumber);
});
