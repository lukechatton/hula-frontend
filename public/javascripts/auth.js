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