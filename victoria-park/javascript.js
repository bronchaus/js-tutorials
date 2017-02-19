$(document).ready(function(){
    $('#p1').load("text/home.txt");
    $('#p2').load("text/home2.txt");
});

$(document).ready(function(){
    $("#center_img").click(function(){
        $("#p1").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#p1").click(function(){
        $(this).hide();
    });
});