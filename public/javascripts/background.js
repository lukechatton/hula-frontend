function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

last_image_placed = 2;
first_background = true;

console.log('fired!')

$(document).ready(function() {
    $("#background-layer").append('<div class="top"></div><div class="bottom"></div>');

    advanceBackgroundImage();
})

advanceBackgroundImage = function() {
    var top_img = $(".top");
    var bottom_img = $(".bottom");

    var temp = 475;


    if(last_image_placed == 2) {
        //$('body').attr('style', 'background: url("http://d35y9swri9q567.cloudfront.net/background/' + getRandomInt(1, 572) + '.jpg") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;');
        $('body').attr('style', 'background: url("http://d35y9swri9q567.cloudfront.net/background/' + temp + '.jpg") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;');
        last_image_placed = 1;
    } else {
        //$('body').attr('style', 'background: url("http://d35y9swri9q567.cloudfront.net/background/' + getRandomInt(1, 572) + '.jpg") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;');
        $('body').attr('style', 'background: url("http://d35y9swri9q567.cloudfront.net/background/' + temp + '.jpg") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;');
        last_image_placed = 2;
    }

    if(first_background) {
        $(document).ready(function () {
            $("#background_layer").delay(500).animate({
                opacity: 1
            }, 500);
        });
        first_background = false;
    } else {
        setTimeout(function() {
            $(".top").toggleClass("transparent");
        }, 500);
    }
};