
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyATcbEkKMMucSzvPVrXxuZW3qruvG3oRAU",
      authDomain: "letschat-d1acc.firebaseapp.com",
      projectId: "letschat-d1acc",
      storageBucket: "letschat-d1acc.appspot.com",
      messagingSenderId: "647223147699",
      appId: "1:647223147699:web:580ec7d35a01bded7844c6"
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
