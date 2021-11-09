let counter1 = 0;
   
$(".poster").click(function() {
    $(".intro").fadeOut();
    $(".collection ").fadeIn();
});

$(".result").click(function() {
    let userResultsPt1 = $(".birthNumber").val();
    let userResultsPt2 = $(".choice").val();
    $(".vote-result").append("<p>" + "Because your birthday month number is " + userResultsPt1 + " and you prefer " + userResultsPt2 + " subjects, you are..." + "</p>").show();

counter1+=1;
    $(".counter").text("This quiz has been taken " + counter1 + " times.");

});