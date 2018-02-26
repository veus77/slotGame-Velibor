
$(function () {

// SLOT MASHINE

    var result = document.getElementById('result');
    var score = document.getElementById('score');
    var ulijevi = $('.row');
    var play;
    x = prompt("New Game, insert coin:");
    results = parseInt(x);
    results = 100;
    score.innerHTML = results;

    function stopSpin() {
        clearInterval(play);
    }

 function spin1() {

     play = setInterval(function () {
         $.each(ulijevi, function () {
             var liE = $(this).children();
         spin = $(liE).removeClass('active');
             random = liE[Math.floor(Math.random() * liE.length)];
         $(random).addClass('active');
         });
     },150);
 };

    $('#btn').on('click', function () {
        result.innerHTML = "";
        if(results === 0 || results < 20){
            alert("GAME OVER! TRY AGAIN.");
            x = prompt("New Game, insert coin:");
            results = parseInt(x);
            score.innerHTML = results;
        }
        spin1();


        $('#stop').one('click', function () {
            stopSpin();

            if($('.active').eq(0).attr('id') === $('.active').eq(1).attr('id') && $('.active').eq(0).attr('id') === $('.active').eq(2).attr('id')){

                results +=50;
                    console.log(results);
               score.innerHTML = results;
                result.innerHTML = "Congratulations!!";
                $(result).css("color","green");
            }else{
                result.innerHTML = "SPIN AGAIN !!!";
                $(result).css("color","red");
                results -= 20;
                console.log(results);
                score.innerHTML = results;
            };
        });
    });

 // END-SLOT MASHINE

});

