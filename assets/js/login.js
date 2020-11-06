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
       firebase.auth();
       /*firebase.performance();
       firebase.remoteConfig();*/
       


$("#login-button").click(function(){
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  //var human = documet.getElementById("human").value;

  if(userEmail.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if(userPassword.length < 4) {
    alert('Please enter a password.');
    return;
  }
  /*if(!human){
    alert('Please Verify that you are not a Robot');
    return;
  }*/
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {
    return firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      //window.alert(userEmail + " " + userPassword)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  })
 
});

$("#logout-button").click(function(){
  //window.alert("Clicked");
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    //window.alert("Signed Out")
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
});


$("#change-password-button").click(function(){
  var auth = firebase.auth();
  var user = firebase.auth().currentUser;
  var emailAddress = "error@test.com";

  if (user != null) {
    user.providerData.forEach(function (profile) {
      emailAddress = profile.email;
      console.log("  Email: " + emailAddress);
    });
  }
  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    window.alert("EMAIL SENT TO RESET PASSWORD");
  }).catch(function(error) {
    // An error happened.
  });
});


/*
 window.onload = firebase.auth().onAuthStateChanged(function(user){
    if(user){
       window.location.href = "loggedin.html"
    } else {
      window.location.herf = "login.html"
    }
  });
*/