firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        window.location.href="index.html";
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function register(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInUserWithEmailAndPassword(userEmail, userPass).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    })

    // const database = firebase.database();

    // var database_ref = database.ref();
    // database_ref.child('hel').set("user_data");


    // alert("hehhh");

    // firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
    //   var database_ref = database.ref();
    //   var user = auth.currentUser;

    //   var user_data = {
    //     email: userEmail,
    //     name: userName,
    //     password: userPass,
    //     profile_image: "",
    //     gender: "male",
    //     myInvites: "",
    //     myReviews: ""
    //   }

    //   database_ref.child('hel').set("user_data");
    //   window.alert("user created");
    // }).catch(function(error){
    //   var errorCode = error.code;
    //   var errorMesage = error.message;

    //   window.alert("Error: " + errorMessage);
    // })

    window.location.href="index.html";

  }
  
  function logout(){
    firebase.auth().signOut();
  }