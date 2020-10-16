firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document. getElementById("results.html").style.display = "initial";

    } else {
      // No user is signed in.
      document. getElementById("form_div").style.display = "initial";
    }
  });
  
function login(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}