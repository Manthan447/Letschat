//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCUGbaJlExG07j2JD1-By9HOpz7t8W711I",
    authDomain: "doctorchatapp-ba759.firebaseapp.com",
    databaseURL: "https://doctorchatapp-ba759.firebaseio.com",
    projectId: "doctorchatapp-ba759",
    storageBucket: "doctorchatapp-ba759.appspot.com",
    messagingSenderId: "767644271649",
    appId: "1:767644271649:web:d2eff59cb7a6c2989f4f60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var get_the_name = localStorage.getItem("login")
  var get_the_room = localStorage.getItem("addroom")

  function Send(){
        msg = document.getElementById("send_message").value;
        firebase.database().ref(get_the_room).push({
              name:get_the_name,
              message: msg,
              like: 0
        })
        document.getElementById("send_message").value = "";
  }
  
  function logout(){
    localStorage.removeItem("login")
    localStorage.removeItem("addroom")
    window.location= "index.html"
  }

function getData() { firebase.database().ref("/"+get_the_room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
