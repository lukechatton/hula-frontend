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