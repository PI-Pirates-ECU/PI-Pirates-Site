        // Your web app's Firebase configuration
  			// For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
          apiKey: "AIzaSyDgMXlmGPqvHLS55eqA17UkhWmvyZD4rW4",
         authDomain: "pi-pirates-site.firebaseapp.com",
         databaseURL: "https://pi-pirates-site.firebaseio.com",
          projectId: "pi-pirates-site",
         storageBucket: "pi-pirates-site.appspot.com",
         messagingSenderId: "432101626526",
         appId: "1:432101626526:web:558fdcd89bf6bfca30e18f",
         measurementId: "G-MGEEJ1R6TK"
       };
     // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
       firebase.analytics();

firebase.auth.Auth.Persistence.SESSION;

$("#login-button").click(function(){
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  //window.alert(userEmail + " " + userPassword)
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      //window.alert(userEmail + " " + userPassword)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error: " + errormessage);
    });

});

/*
function login(){
  var userEmail = document.getElementById("email").value
  var userPassword = document.getElementById("password").value

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      window.alert(userEmail + " " + userPassword)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error: " + errormessage)
    });
}*/