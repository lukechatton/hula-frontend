$(document).ready(function() {
    $('.spa-link-rooms').click(function() {
        console.log('switching to rooms tab');
        switchTab('rooms');
    });

    $('.spa-link-brand').click(function() {
        console.log('switching to rooms tab');
        switchTab('rooms');
    });

    $('.spa-link-now-playing').click(function() {
        console.log('switching to player tab');
        switchTab('player');
    });

    $('.spa-link-login').click(function() {
        console.log('opening login modal');
        $('#signup-modal').modal('hide');
        $('#login-modal').modal('show');
    });

    $('.spa-link-logout').click(function() {
        location.href= '/logout';
    });

    $('.spa-link-signup').click(function() {
        console.log('opening signup modal');
        $('#login-modal').modal('hide');
        $('#signup-modal').modal('show');
    });

    $('.spa-link-create-room').click(function() {
        console.log('switching to create_room tab');
        switchTab('create-room');
    });
})

switchTab = function(destination) {
    $('#room-list-tab').attr('hidden', 'hidden');
    $('#login-tab').attr('hidden', 'hidden');
    $('#player-tab').attr('hidden', 'hidden');
    $('#create-room-tab').attr('hidden', 'hidden');

    switch(destination) {
        case 'rooms':
            refreshRoomList();
            $('#room-list-tab').removeAttr('hidden');
            $('#room-list-tab').addClass('animated fadeIn');
            break;

        case 'create-room':
            $('#create-room-tab').removeAttr('hidden');
            $('#create-room-tab').addClass('animated fadeIn');

        case 'login':
            $('#login-tab').removeAttr('hidden');
            $('#login-tab').addClass('animated fadeIn');
            break;

        case 'register':
            $('#register-tab').removeAttr('hidden');
            $('#register-tab').addClass('animated fadeIn');
            break;

        case 'player':
            $('#player-tab').removeAttr('hidden');
            $('#player-tab').addClass('animated fadeIn');
            break;
    }
}