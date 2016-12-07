var db = firebase.database();

var title;
var GlossEntry;

db.ref('title').on('value', function (snapshot) {
    populateTitle(snapshot.val());
});

db.ref('GlossEntry').on('value', function (snapshot) {
    populateSubtitle(snapshot.val());
});

function populateTitle(title) {
    $('#title').val(title);
}

function populateSubtitle(GlossEntry) {
    $('#subtitle').val(GlossEntry.Abbrev);
}

function validUser() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        updateContent();
    } else {
        $('#notification-bar').html('<span style="color:red;">Incorrecto</span>');
        $("#create-user").show();
    }
  });
}

function updateContent() {
    var title = $('#title').val();
    var subtitle = $('#subtitle').val();

    db.ref('title').set(title);
    db.ref('GlossEntry/Abbrev').set(subtitle);

    $('#notification-bar').html('<span style="color:green;">Bien atualizado pipi</span>')
}
