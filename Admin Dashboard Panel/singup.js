// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
  
//       // document.getElementById("login_div").style.display = "none";
  
//       var user = firebase.auth().currentUser;
  
//       if(user != null){
  
//         var email_id = user.email;
//         //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
//         // window.location.href="index.html";
//       }
  
//     } else {
//       // No user is signed in.
  
//       document.getElementById("login_div").style.display = "block";
  
//     }
//   });

function writeData(){
  const database = firebase.database();
  var database_ref = database.ref();
  var user = firebase.auth().currentUser;

  var user_data = {
    email: userEmail,
    name: userName,
    password: userPass,
    profile_image: "",
    gender: "male",
    myInvites: "",
    myReviews: ""
  }

  alert("KKDFKFD");

  database_ref.child('usersuer').set(user_data).catch(function(error){
    alert("ERROR");
  })
}
  
  function register(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var userName = document.getElementById("username_field").value;
    const database = firebase.database();

    writeData();

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
      // var database_ref = database.ref();
      // var user = auth.currentUser;

      // var user_data = {
      //   email: userEmail,
      //   name: userName,
      //   password: userPass,
      //   profile_image: "",
      //   gender: "male",
      //   myInvites: "",
      //   myReviews: ""
      // }

      // database_ref.child('usersuer').set("user_data");
      window.alert("user created");
    }).catch(function(error){
      var errorCode = error.code;
      var errorMesage = error.message;

      window.alert("Error: " + errorMessage);
    })


  }
  
  function logout(){
    firebase.auth().signOut();
  }

  document.getElementById("login_div").style.display = "block";