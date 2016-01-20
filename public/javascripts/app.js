user = 'loading...';
password = 'loading...';



$(document).ready(function() {
    // Username/password
    user = $('#user').text();
    password = $('#password').text();


    // Main Page
    if($('#room-list-tab').length) {
        var i = 0;
        while(i < 5) {
            $('#room-list-tab').append('<div class="col-xs-18 col-sm-4"><div class="panel panel-default panel-dark room-card"><div class="panel-heading"><span class="room-name">' + 'Chill Room' + '</span><span class="room-users-wrapper pull-right"><span class="room-users">' + '27' + '</span><i class="fa fa-users"></i></span></div><div class="panel-body"><img src="http://i.ytimg.com/vi/' + 'HvhMDEunq3E' + '/0.jpg"></div><div class="panel-footer"><div class="row"><div class="col-md-8"><span class="song-name">' + 'Example' + '</span><span class="song-artist">' + 'Etherwood' + '</span></div><div class="col-md-4"><button class="btn btn-info" onclick="switchTab(\'' + 'player' + '\')">join</button></div></div></div></div></div>');
            i++;
        }

        switchTab('rooms');
    }

    // Login
    else if($('#login').length) {
        switchTab('login')
    }

    // Register
    else if($('#register').length) {
        switchTab('register')
    }
})

refreshRoomList = function() {

}

switchTab = function(destination) {
    $('#room-list-tab').attr('hidden', 'hidden');
    $('#login-tab').attr('hidden', 'hidden');
    $('#player-tab').attr('hidden', 'hidden');
    $('#create-room-tab').attr('hidden', 'hidden');

    switch(destination) {
        case 'rooms':
            refreshRoomList();
            $('#room-list-tab').removeAttr('hidden');
            $('#room-list-tab').addClass('animated fadeInUp');
            break;

        case 'create-room':
            $('#create-room-tab').removeAttr('hidden');
            $('#create-room-tab').addClass('animated fadeInUp');

        case 'login':
            $('#login-tab').removeAttr('hidden');
            $('#login-tab').addClass('animated fadeInUp');
            break;

        case 'register':
            $('#register-tab').removeAttr('hidden');
            $('#register-tab').addClass('animated fadeInUp');
            break;

        case 'player':
            $('#player-tab').removeAttr('hidden');
            $('#player-tab').addClass('animated fadeInUp');
            break;
    }
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

player = false;
player_initialized = false;

$(document).ready( function() {
    loadPlayer();
});

function loadPlayer() {
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubePlayerAPIReady = function() {
            loadVideoById(1, 1);
        };

    } else {
        loadVideoById(1, 1);
    }
}

function loadVideoById(id, time) {
    $("#no_video").attr("hidden", "hidden");
    $("#video-container").removeAttr("hidden");
    if(!player_initialized) {
        player = new YT.Player('player', {
            // height: '390',
            // width: '100%',
            // videoId: id,
            videoId: 'SDTZ7iX4vTQ',
            playerVars: {
                autoplay: 1,
                border: 0,
                cc_load_policy: 0,
                controls: 0,
                disablekb: 1,
                enablejsapi: 1,
                hd: 1,
                playsinline: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                origin: "http://hula.fm",
                playerapiid: "player",
                rel: 0,
                showinfo: 0,
                showsearch: 0,
                // start: time
                start: 0,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        player_initialized = true;
    } else {
        // player.loadVideoById({'videoId': id, 'suggestedQuality': 'large'});
        // player.seekTo(time);
        player.loadVideoById({'videoId': 'HvhMDEunq3E', 'suggestedQuality': 'large'});
        player.seekTo(0);
    }
}

function onPlayerStateChange(event) {
    if(event.data == 2) {
        player.playVideo();
    }
}

// function onYouTubeIframeAPIReady() {
// 	loadVideoById(1, 1);
// }

function onPlayerReady(event) {
    if(window.localStorage.getItem("volume") != undefined) {
        player.setVolume(window.localStorage.getItem("volume"));
    } else {
        player.setVolume(50);
    }
}

function volumeSlider(input) {
    player.setVolume(input.value);
    window.localStorage.setItem('volume', input.value);
}

muted = false;
var volumeBeforeMute = 50;

$(document).ready(function() {

    $("#volume-toggle").click(function() {
        if(muted) {
            player.setVolume(volumeBeforeMute);
            $("#volume-slider").val(volumeBeforeMute);
            $(".fa-volume-off").addClass("fa-volume-down");
            $(".fa-volume-down").removeClass("fa-volume-off");
            muted = false;
        } else {
            volumeBeforeMute = player.getVolume();
            player.setVolume(0);
            $("#volume-slider").val(0);
            $(".fa-volume-down").addClass("fa-volume-off");
            $(".fa-volume-off").removeClass("fa-volume-down");
            muted = true;
        }
    });

    $("#volume-slider").on('input', function(e) {
        vol = $("#volume-slider").val();
        player.setVolume(vol);
        window.localStorage.setItem('volume', vol);
    });
})

// Progress Bar
setInterval(function() {
    $("#time_elapsed > div").css("width", (player.getCurrentTime() / player.getDuration()) * 100 + '%');

    // time_remaining = new Date((player.getDuration() - player.getCurrentTime()) * 1000);
    // $("#time-remaining").html(time_remaining.getMinutes() + ":" + zeroPad(time_remaining.getSeconds(), 2));
}, 200);

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}








