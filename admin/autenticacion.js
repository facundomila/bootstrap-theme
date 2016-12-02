var auth = firebase.auth();

//LOGIN
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
          $('#notification-top-bar').html('<span style="color:red;">Incorrecto</span>');
          $("#create-user").show();
  });
}

function createUser() {
  var email = $("#newEmailVal").val();
  var password = $("#newPassVal").val();
    auth.createUserWithEmailAndPassword(email, password)
        .catch(function() {
          $('#alert').html("comela");
});
}

function logout() {
  firebase.auth().signOut().then(function() {
      $('#alert').html("sesion cerrrada");
      $("#cpanel").hide();
      $("#user-state").hide();
      $("#login").show();
}, function(error) {
      $('#alert').html("vuelva a intentarlo");
});
}
