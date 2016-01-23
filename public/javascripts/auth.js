var username = "";
var password = "";

$(document).ready(function() {
    var username = $('#t1').text();
    var password = $('#t2').text();
})

function setUserInfo(username, password) {
    this.username = username;
    this.password = password;
}

function submitSignupForm() {
    var username = $('#signup-input-username').val();
    var email = $('#signup-input-email').val();
    var password = $('#signup-input-password').val();

    //todo: create an animation to play while POST is active.

    $.post('/signup',
        {
            username: username,
            email: email,
            password: password
        },
        function(data, status) {

            if(data.failed) {
                //todo: create a proper error message instead of alert
                alert("Error: " + data.failed);
            } else {
                location.reload();
            }
        }
    );
    return false;
}

function submitLoginForm() {
    var username = $('#login-input-username').val();
    var password = $('#login-input-password').val();

    //todo: create an animation to play while POST is active.

    $.post('/login',
        {
            username: username,
            password: password
        },
        function(data, status) {

            if(data.failed) {
                //todo: create a proper error message instead of alert
                alert("Error: " + data.failed);
            } else {
                location.reload();
            }
        }
    );
    return false;
}