//LOGIN
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      $("#login").hide();
      $("#user-info").show();
      $("#cpanel").show();
  } else {
      $("#login").show();
      $("#user-info").hide();
  }
});

function login() {
  var email = $("#emailVal").val();
  var password = $("#passVal").val();
  firebase.auth().signInWithEmailAndPassword(email, password)
          .catch(function() {
          $("#result").val('no existe');
          $("#create-user").show();
  });
}

function createUser() {
  var email = $("#emailVal").val();
  var password = $("#passVal").val();
  firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function() {
          $("#result").val('vuelva a intentarlo');
});
}

function logout() {
  firebase.auth().signOut().then(function() {
      alert("La sesion ha sido cerrada.");
      $("#cpanel").hide();
      $("#user-info").hide();
      $("#login").show();
}, function(error) {
      alert("Ha ocurrido un error. Por favor vuelva a intentarlo.");
});
}
