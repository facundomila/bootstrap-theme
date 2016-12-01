var config = {
    apiKey: "AIzaSyDLxlsP9XGpnbwzQ2AbTfEG_IPq1fMrKYA",
    authDomain: "hello-world-614c2.firebaseapp.com",
    databaseURL: "https://hello-world-614c2.firebaseio.com",
    storageBucket: "hello-world-614c2.appspot.com",
    messagingSenderId: "348530014620"
};
firebase.initializeApp(config);

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
