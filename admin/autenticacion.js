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
    auth.createUserWithEmailAndPassword(email, password)
        .catch(function() {
          $('#notification-bar').html("comela");
});
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
