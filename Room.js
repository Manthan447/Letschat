
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("updatename").innerHTML = "Welcome "+ get_the_name;
    
    function logout(){
          window.location = "index.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function add_the_room(){
      therooms = document.getElementById("add_room").value;
      firebase.database().ref("/").child(therooms).update({addroom : therooms})
      localStorage.setItem("addroom" , therooms)
      window.location = "letschat_room.html"
}