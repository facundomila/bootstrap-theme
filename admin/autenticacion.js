var auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
  if (user) {
      $("#autentication").hide();
      $("#user-state").show();
      $("#cpanel").show();
      $('#user-login').show();
      $('#user-login').html(user.email);
  } else {
      $("#autentication").show();
      $("#user-state").hide();
  }
});

function login() {
  var email = $("#emailVal").val();
  var password = $("#passVal").val();
    auth.signInWithEmailAndPassword(email, password)
          .catch(function() {
          $('#notification-bar').html('<span style="color:red;">Incorrecto</span>');
          location.reload();

  });
}

function createUser() {
  var email = $("#newEmailVal").val();
  var password = $("#newPassVal").val();
  var comfirm = $("#comfirmPassVal").val();
  if (comfirm == password) {
    auth.createUserWithEmailAndPassword(email, password)
        .catch(function() {
          $('#notification-bar').html("comela");
});
  } else {
      $('#notification-bar').html("las contraseñas no coinciden");
  }
}

function logout() {
  firebase.auth().signOut().then(function() {
      $('#notification-bar').html("sesion cerrrada");
      $("#cpanel").hide();
      $("#user-state").hide();
      $("#login").show();
}, function(error) {
      $('#notification-bar').html("vuelva a intentarlo");
});
}

$(document).ready(function() {
    if (localStorage.chkbx && localStorage.chkbx != '') {
        $('#remember_me').attr('checked', 'checked');
        $('#emailVal').val(localStorage.usrname);
        $('#passVal').val(localStorage.pass);
    } else {
        $('#remember_me').removeAttr('checked');
        $('#emailVal').val('');
        $('#passVal').val('');
    }

    $('#remember_me').click(function() {

        if ($('#remember_me').is(':checked')) {
            // save username and password
            localStorage.usrname = $('#emailVal').val();
            localStorage.pass = $('#passVal').val();
            localStorage.chkbx = $('#remember_me').val();
        } else {
            localStorage.usrname = '';
            localStorage.pass = '';
            localStorage.chkbx = '';
        }
    });
});

function showSignupPanel() {
    $("#login-panel").hide();
    $("#signup-panel").fadeIn("slow");
}

function showLoginPanel() {
    $("#login-panel").fadeIn("slow");
    $("#signup-panel").hide();
}
