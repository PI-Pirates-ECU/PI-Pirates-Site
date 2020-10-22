firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.alert("Signed In")
      document.getElementById('dash').src = "loggedin.html"
    } else {
      // No user is signed in.
      window.alert("Signed Out")
      document.getElementById('login').src = "login.html"
    }
  });  


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
}