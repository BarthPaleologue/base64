$(function() {

    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";

    const width = 1366;
    const height = 720;
    const pixelSize = 5;

    for (let i = 0; i < width; i++) {
        ctx.fillStyle = "";
        ctx.fillRect(i * pixelSize, 0, pixelSize, pixelSize);

        for (let j = 0; j < height; j++) {
            ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
            ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);


        }

    }


    var dataURL = canvas.toDataURL();
    console.log(dataURL);

    $('#click').click(function() {
        $("#result").html(dataURL);
    });
});


//'#' + Math.floor(Math.random() * 16777215).toString(16);