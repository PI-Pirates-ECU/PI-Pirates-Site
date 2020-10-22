firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('dash').src = "loggedin.html"
    } else {
      // No user is signed in.
      document.getElementById('login').src = "login.html"
    }
  });  


function login(){
    var userEmail = document.getElementById("email").value
    var userPassword = document.getElementById("password").value

    window.alert(userEmail + " " + userPassword)

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errormessage)
      });
}