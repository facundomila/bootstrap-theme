var db = firebase.database();

var title;
var clientes;

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
    $('#subtitle').html(GlossEntry.nacionalidad);
}

function writeUserData(title, subtitle) {
    db.ref('title').set(title);
    db.ref('GlossEntry/Abbrev').set(subtitle)
}

//function writeUserData(userId, name, email, imageUrl) {
  //firebase.database().ref('users/' + userId).set({
    //username: name,
    //email: email,
    //profile_picture : imageUrl
  //});
//}
