window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    for(var x=0;x<1000;x++){
        context.beginPath();
        context.moveTo(Math.random()*width, Math.random()*height)
        context.lineTo(Math.random()*width, Math.random()*height)
        context.stroke();
    }
};