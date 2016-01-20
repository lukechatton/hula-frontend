$(document).ready(function() {
    $('#rooms-nav-button').click(function() {
        console.log('switching to rooms tab');
        switchTab('rooms');
    });

    $('#brand-nav-button').click(function() {
        console.log('switching to rooms tab');
        switchTab('rooms');
    });

    $('#now-playing-nav-button').click(function() {
        console.log('switching to player tab');
        switchTab('player');
    });

    $('#login-nav-button').click(function() {
        console.log('switching to ldogin tab');
        switchTab('login');
    });

    $('#create-room-nav-button').click(function() {
        console.log('switching to create_room tab');
        switchTab('create-room');
    });
})