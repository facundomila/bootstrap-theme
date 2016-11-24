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
var GlossEntry;

db.ref('title').on('value', function (snapshot) {
    populateTitle(snapshot.val());
});

db.ref('GlossEntry').on('value', function (snapshot) {
    populateSubtitle(snapshot.val());
});

function populateTitle(title) {
    $('#title').html(title);
}

function populateSubtitle(GlossEntry) {
    $('#subtitle').html(GlossEntry.Abbrev);
}